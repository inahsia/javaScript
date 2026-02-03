//generics 
// if i am using any key word , typescripts power gets reduced like u need to specify , but any is datatype  which is actually present 

function identify(value:any):any{
  return value;
}

const result=identify("hello");
result.toUpperCase();

// for generics , we will use T as well placeholder for a type

function identity<T>(value:T):T{
  return value;
}

const a=identity("hello");
a.toUpperCase();

const b=identity(10);



// generic functions
function WrapInArray<T>(value:T):T[]{
  return [value];
}


// generic function should be use in place of any 
// as any will going to make ambiguity


