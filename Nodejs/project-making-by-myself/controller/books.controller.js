import {books} from '../book.js'


export const bookscatalog=(router)=>{
  router.get('/',((req,res)=>{
  // res.setHeader('name','aishani');
  res.json(books);
}))
}



export const addBooks=(router)=>{
  router.post('/',((req,res)=>{
  //req.query and req.body-> we got both 
  console.log(req.params.id);
  const {title,author}=req.body;
  console.log(req.header);
  if(!title|| title==='') return res.status(400).json({erroe:'title is required'});
  if(!author|| author==='') return res.status(400).json({erroe:'author is required'});
  const id=books.length;
  const book={id,title,author};
  books.push(book);
  return res.status(201).json({message:'book created success',id});
}))
}
  
export const fetchByIdBooks=(router)=>{
  router.get('/:id',(req,res)=>{
  const id=parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json('it should be an id containing number')
  const book=books.find(e=>e.id===id);
  if (!book) return res.status(404).json({error:`book with id ${id} does not exist`})
  return res.json(book);
})
}



export const deleteTheItems=(router)=>{
  router.delete('/:id',((req,res)=>{
  const id=parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({error:"containing number"})
    const book=books.find(e=>e.id===id);
  if (!book) return res.status(404).json({error:`book with id ${id} does not exist`})
  const indexToDelete=books.findIndex((e)=>e.id===id);
  if (indexToDelete<0)
    return res.status(404).json({error:"no book with this invalid id"})
  books.splice(indexToDelete,1);
  return res.status(200).json({message:"book is deleted"});
}))
}