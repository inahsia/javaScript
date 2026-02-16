import { expenses, counterFn } from "../expenses.js";
import {Router} from 'express'

const router=Router();
router.post('/', (req, res, next) => {
  const { item, expense } = req.body;
  console.log(req.body);
  if (!item || expense === undefined) {
    return next(new Error('Please add item name and expense'));
  }
  const id = counterFn();
  const task = { id, item, expense: Number(expense) };
  expenses[id] = task;
  res.status(201).json(task);
});



router.get('/',(req,res)=>{
  res.json(Object.values(expenses));
})



  router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const expense = expenses[id];
    if (!expense) {
      return next(new Error('please enter valid id'));
    }
    res.json(expense);
  });



  router.put('/:id',(req,res,next)=>{
    const id =req.params.id;
    const list=expenses[id];
    const {item,expense}=req.body;
    if(!list) return next(new Error("todo not found"));
    
    if(item!==undefined) list.item=item;
    if(expense!==undefined) list.expense=expense
    res.status(204).json(list);
  })



  router.delete('/:id',(req,res,next)=>{
    const id=req.params.id;
    
    if (!id) return next(new Error('no id found that is ssupposes to be deleted'));
    delete expenses[id];
    res.status(204).json({mess:"deleted!"})
  })

  export const userController=router