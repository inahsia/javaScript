import {database,counterFn} from '../stores.js'
import {AppError} from '../middleware/error.js'
export const createData=(router)=>{
  router.post('/',(req,res,next)=>{
    const id=counterFn();
    const {name,email,role,createdAt}=req.body;
    const data={
      id,
      name,
      email,
      role,
      createdAt:Date.now()
    }
    if (!name || !email || !role ) return next(new AppError("you are missing something"));

    database[id]=data;
    res.status(201).json({mess:"you have already added the value successfully"});

  })
}

export const getDataById=(router)=>{
  router.get('/:id',(req,res,next)=>{
    

    const id=req.params.id;
    const data=database[id];
     if (!data) return next(new AppError("invalid"));
    res.status(200).json(data);
  })
}

export const getData=(router)=>{
  router.get('/',(req,res,next)=>{
    let  {role,name,limit=5,page=1}=req.query;
    limit=Number(limit);
    page=Number(page);

    let dataentry=Object.values(database);


    if (name){
       dataentry=dataentry.filter(e=>{
        e.name.toUpperCase().includes(name.toUpperCase())
       }
    if (role){
      dataentry=dataentry.filter(e.role===role)
    }


      })

    // pagination 
    const start=(page-1)*limit;
    const end =start+limit;
    const pagination=dataentry.slice(start,end);


    const data=database;
    if (Object.keys(data).length === 0) {return next(new AppError('no data is present to show'));
    }  
    res.status(200).json(
      {
    total: dataentry.length,
    page,
    limit,
    data: pagination
  }

    );
})
}

export const updateData=(router)=>{
  router.put('/:id',(req,res,next)=>{
    const id=req.params.id;
    const data=database[id];
    const {name,email,role}=req.body;
    if (name!==undefined) {data.name=name};
    if(email!==undefined){data.email=email};
    if (role!==undefined){data.role=role}; 

    res.status(204).json(data);
  })
}


export const deleteData=(router)=>{
  router.delete('/:id',(req,res,next)=>{
  const id=req.params.id;
  const data=database[id];
  if (!id) return next(new AppError('invalid id'));
  delete database[id];
  res.status(204).json({mess:"there is a massive error"});
  })
}