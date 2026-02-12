import {getNextId, todos} from '../stores/todoStore.js'


export const getTodos=(router)=>{router.get('/',(req,res)=>{
  res.json(Object.values(todos));
})};

export const getTodosById=(router)=>{router.get('/:id',(req,res)=>{
  const todo=todos[req.params.id];
  if(!todo) return next(new Error("To do not found "));

  res.json(todo);
})};

export const createTodo=(router)=>{router.post('/',(req,res,next)=>{
  const {text}=req.body;
  if (!text) return next(new Error("you have to put something man"));
  const id=getNextId();
  const todo={
    id,
    text,
    completed:false
  }

  todos[id]=todo;
  res.status(201).json(todo);
})};

export const updateTodo=(router)=>{router.put('/:id',(req,re,next)=>{
  const todo=todos[req.params.id];
  if(!todo) return next(new Error("Todo not found"));
  const {text,completed}=req.body;
  if (text!==undefined) todo.text=text;
  if (completed!==undefined) todo.completed=completed;
  res.json(todo);

})};

export const deleteTodo=(router)=>{router.delete('/:id',(req,res,next)=>{
  if (!todos[req.params.id])
    return next(new Error("todo not found"));
  delete todos[req.params.id];
  res.json({message:"Deleted"});
})
};
