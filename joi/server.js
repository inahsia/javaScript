import express from "express";
import Joi from "joi";

const app = express();
app.use(express.json());



const registerSchema = Joi.object({
  name:Joi.string().min(5).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  age: Joi.number().min(18).required()
});


const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});


app.post("/register", (req, res) => {

  const { error, value } = registerSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    });
  }

  res.json({
    message: "User registered ",
    user: value
  });

});



app.post("/login", (req, res) => {

  const { error, value } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    });
  }

  res.json({
    message: "login successful",
    user: value
  });

});



app.listen(3000, () => {
  console.log("Server running on port 3000");
});