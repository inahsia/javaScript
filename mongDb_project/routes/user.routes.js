import express from 'express'
import { user } from '../models/user.model.js'
import bcrypt from 'bcrypt'

const router = express.Router();

router.post('/books', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "email exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const User = await user.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      status: 'success',
      data: { id: User._id }
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

router.get('/books/:id',async(req,res)=>{
  try{
    const id=req.params.id;
    if (!id) {
      
    }
   

  }
  catch(err){
      return next(new Error("this is a new error bro "));
  }
}
)
export const userRoute = router;
