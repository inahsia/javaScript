arrray=[1,2,3,4,5,6];
let total=0;
for (var i of arrray)
{

  total+=arrray[i];
  
}
console.log(total);




object1={
  name:"aishani ",
  semester:8
}
object1.name="shreya";
object1.freeze();
object1.semester=9;

Object.freeze(object1)