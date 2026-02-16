import {Router} from 'express';
import { AppError,notFound} from '../middleware/error.js';
import {counterFn,database} from '../stores.js'
const router = Router();

router.post('/', (req,res)=>{
   const id=counterFn();
      const {name,email,role,createdAt}=req.body;
      const data={
        id,
        name,
        email,
        role,
        createdAt:Date.now()
      }
      if (!name || !email || !role ) return new AppError("you are missing something");
  
      database[id]=data;
      res.status(201).json({mess:"you have already added the value successfully"});
  
})

router.get('/',(req,res,next)=>{
  let {limit=5,page=1,role,name}=req.query;
  limit=Number(limit);
  page=Number(page);

  let data=Object.values(database);
  //for filtering 
  
  if(name){
    data=data.filter(e=>e.name.toUpperCase().includes(name.toUpperCase()))
  }
  if(role){
    data=data.filter(e=>e.role===role);
  }
  const start=(page-1)*limit;
  const end=start+limit;

  const pagination=data.slice(start,end);
  if(pagination.length===0){
   return next(new AppError('no data found'));
  }

  res.status(200).json({
    total:data.length,
    page,
    limit,
    data:pagination
  });

  

});

router.get('/:id',(req,res)=>{
      const id=req.params.id;
      const data=database[id];
       if (!data) return new AppError("invalid");
      res.status(200).json(data);
})

router.put('/:id',(req,res)=>{
  
      const id=req.params.id;
      const data=database[id];
      const {name,email,role}=req.body;
      if (name!==undefined) {data.name=name};
      if (email!==undefined){data.email=email};
      if (role!==undefined){data.role=role}; 
  
      res.status(204).json(data);
})

router.delete('/:id',(req,res)=>{
    const id=req.params.id;
    const data=database[id];
    if (!id) return new AppError('invalid id');
    delete database[id];
    res.status(204).json({mess:"there is a massive error"});
})




export const userController = router;
