import { expenses, counterFn } from "../expenses.js";

export const addTask = (router) => {
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

};

export const getExpenses=(router)=>{router.get('/',(req,res)=>{
  res.json(Object.values(expenses));
})};


export const getTask = (router) => {
  router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const expense = expenses[id];
    if (!expense) {
      return next(new Error('please enter valid id'));
    }
    res.json(expense);
  });
};

export const updateTask=(router)=>{
  router.put('/:id',(req,res,next)=>{
    const id =req.params.id;
    const list=expenses[id];
    const {item,expense}=req.body;
    if(!list) return next(new Error("todo not found"));
    
    if(item!==undefined) list.item=item;
    if(expense!==undefined) list.expense=expense
    res.status(204).json(list);
  })
}

export const  deleteTask=(router)=>{
  router.delete('/:id',(req,res,next)=>{
    const id=req.params.id;
    
    if (!id) return next(new Error('no id found that is ssupposes to be deleted'));
    delete expenses[id];
    res.status(204).json({mess:"deleted!"})
  })
}