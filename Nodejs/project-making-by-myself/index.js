import express from 'express'
import dotenv from 'dotenv'
import { title } from 'process';

dotenv.config();
const port=process.env.PORT||3000;

const app=express();
const books=[
  {id:1,title:"lord of rings",author:"unknown"},
  {id:2,title:"lord give mercy ",author:"unknown2"},

]
app.use(express.json());
//routes
app.get('/books',(req,res)=>{
  res.setHeader('name','aishani');
  res.json(books);
})

app.get('/books/:id',(req,res)=>{
  const id=parseInt(req.params.id)  ;
  if (isNaN(id)) return res.status(400).json('it should be an id containing number')
  const book=books.find(e=>e.id===id);
  if (!book) return res.status(404).json({error:`book with id ${id} does not exist`})
  return res.json(book);
})

app.post('/books',(req,res)=>{
  const {title,author}=req.body;
  if(!title|| title==='') return res.status(400).json({erroe:'title is required'});
  if(!author|| author==='') return res.status(400).json({erroe:'author is required'});
  const id=books.length;
  const book={id,title,author};
  books.push(book);
  return res.status(201).json({message:'book created success',id});
})

app.delete('/books/:id',(req,res)=>{
  const id=parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({error:"containing number"})
    const book=books.find(e=>e.id===id);
  if (!book) return res.status(404).json({error:`book with id ${id} does not exist`})
  const indexToDelete=books.findIndex((e)=>e.id===id);
  if (indexToDelete<0)
    return res.status(404).json({error:"no book with this invalid id"})
  books.splice(indexToDelete,1);
  return res.status(200).json({message:"book is deleted"});

})


app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})