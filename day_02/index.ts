// undefine is a datatype, which value has not assigned
let a;
console.log(a) //undefine

let x = undefined;
console.log(x); //undefine

// null mean no or not, where u declare that there is no value to be assigned. 
let v = null;
console.log(v); // null

let person = {
    name : "zara",
    age : null
}
console.log(person.age); //null

//boolean---
// use for true or flase statement
 
let myBoolean: boolean = true;
let trafficSignal: boolean = 'true'; //Error: Type 'string' is not assignable to type 'boolean'.
console.log(myBoolean);

// template letrals---
// A variable that can use anywhere with the help of dollar sign and curly braces as given below e.g ${variable name}.

let personinfo = {
    name : 'ali',
    age : 23, 
} 
console.log(`hello this is ${personinfo.name} and i'm ${personinfo.age} years old`)
console.log(typeof personinfo); // typeof is a keyword.
 
// Any---
// it could be string, number, boolean etc.

// without 'any' datatype error will occour.

 let b = true;
 b = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
 Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

let u : any = true;
u = "string";
Math.round(u); // as here we use any datatype. there is no error.

// unknown-----
// unknown is a similar, but safer alternative to any.

let y : unknown = true;
y = "string";
Math.round(u);

//never---
// never effectively throws an error whenever it is defined.

let s : never = true; // Error: Type 'boolean' is not assignable to type 'never'.



