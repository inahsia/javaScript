import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;

const SECRET = "amino";
const users = [];

app.post('/register', async (req, res) => {
  const { email, password,role } = req.body;

  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword ,role:role || "user"});

  res.json({ message: "User registered successfully" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(e =>e.email === email);
  if (!user) {
    return res.status(400).json({message: "Invalid"});
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({message: "Invalid"});
  }
  const token = jwt.sign(
    {email: user.email,
      role: user.role},

    SECRET,
    { expiresIn: "1h" }
  );
  res.json({ token });
});


app.get('/profile',verifyToken, (req, res) => {
  res.json({
    message: "protected data",
    user: req.user
  });
});

app.get('/admin',
  verifyToken,
  authorization("admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin" });
  }
);

function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(403).json({ message: "No token " });
  }
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  }
  catch (err) {
    res.status(401).json({ message: "invalid token" });
  }
}

function authorization(role){
  return (req,res,next)=>{
    if(req.user.role!=role){
      return res.status(403).json({message:"forbidden"});
    }
    next();
  }
}

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});