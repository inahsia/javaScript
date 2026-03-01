import express from 'express'
import Product from '../models/product.js';
import { error } from 'console';

export const createProduct=async(body)=>{
    const {name,description,category, price,stock}=body;
    const existingItem=await Product.findOne({name});
    if (existingItem){
      throw new Error('already exists');
    }
    const user=await Product.create({
      name,description,category, price,stock
    })
    return user;
}

export const readProduct=async(page=1,limit=2)=>{
  
  page=Number(page);
  limit=Number(limit);
  const user=await Product.find().limit(limit)
  .skip((page - 1) * limit)
  .sort({ createdAt: -1 });
  return user;
}

export const getByid=async(id)=>{
  const user=await Product.findById(id);
  return user;
}

export const updatebyId=async(id,body)=>{
 
  const user=await Product.findByIdAndUpdate(id,body,
    {new:true}

  )
      return user
}


export const deletebyId=async(id)=>{
  const user=await Product.findByIdAndDelete(id);
return user
}
















