const fs=require("fs");

const file="expense.json"
function loadExpenses(file){
  try{
    const data=fs.readFileSync(file);
    return JSON.parse(data);
  }
  catch{
    return []
  }

}

function saveExpenses(expenses){
  fs.writeFileSync(file,JSON.stringify(expenses));
}

function addExpenses(title,amount){
  const expenses=loadExpenses();
  const newExpenses={
    id:Date.now(),
    title,
    amount:Number(amount)
  }
  expenses.push(newExpenses);
  saveExpenses(expenses);
  console.log("expenses are saved");
  
}

function listAllExpenses(){
  const expenses=loadExpenses();
  if(expenses.length=== 0){
    console.log('no expenses are listed');
    return 
  }

    expenses.forEach(e => {
      console.log(`${e.id} items : ${e.title} with amount ${e.amount}`);
    });
  
}

// addExpenses("apple",1);
listAllExpenses();

