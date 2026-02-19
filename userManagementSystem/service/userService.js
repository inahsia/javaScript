import { counterFn, database } from "../stores.js";
import { AppError, asyncHandler } from "../middleware/error.js";

export const createUser=async(body)=>{
  const {name,email,role}=body;
  if(!name ||!email ||!role){
    return next(new AppError("you are missing something"));
  }
  const id=counterFn();
  const data={
    id,name,email,role,createAt:Date.now()
  };

  database[id]=data;
  return data;

};


export const getUserById=async(id)=>{
  const data=database[id];
  if (!id){
    return next(new AppError("This is an invalid id"));
  }
  return data;
}

export const getUsers=async(query)=>{
  
  let {limit=5,page=1,role,name}=query;
  page=Number(page);
  limit=Number(limit);
  const data=Object.values(database);

  if (name){
    data=data.filter((e)=>{
    e.name.upperCase().includes(name.upperCase());
    }
    )
  }

  if (role){
    data = data.filter(e => e.role === role);
  }
  //now comes the filtering 
 
  
  if(data===undefined){
    return next(new AppError('this is some next level error'));
    }


//now the concept of pagination 
const start=(page-1)*limit;
const end=start+limit;

const pagination=data.slice(start,end);
return {
  total: data.length,
  page,
  limit,
  data: pagination
};
}


export const updateValueById=async(id,body)=>{
  const data=database[id];
  const {name,role,email}=body;

  if (name!==undefined){ 
    data.name=name};
    if (role!==undefined){ 
    data.role=role};
    if(email!==undefined){
      data.email=email;
    }
    return data

}

export const deleteById = async (id) => {
const data = database[id]; 
if (!data) throw new AppError("invalid id"); 
delete database[id]; return true;
};











