// undefine is a datatype, which value has not assigned
var a;
console.log(a); //undefine
var x = undefined;
console.log(x); //undefine
// null mean no or not, where u declare that there is no value to be assigned. 
var b = null;
console.log(b); // null
var person = {
    name: "zara",
    age: null
};
console.log(person.age); //null
//boolean---
var myBoolean = true;
console.log(myBoolean);
// template letrals---
// A variable that can use anywhere with the help of dollar sign and curly braces as given below e.g ${variable name}.
var personinfo = {
    name: 'ali',
    age: 23,
};
console.log("hello this is ".concat(personinfo.name, " and i'm ").concat(personinfo.age, " years old"));
console.log(typeof personinfo); // typeof is a keyword.
