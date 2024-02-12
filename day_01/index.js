var myName = 'Tabita'; // string dataType
//let, const, var  _
var age = 25; // number 
var address = 'ISB';
console.log("My name is", myName);
console.log("age is ", age);
console.log("address is", address);
// var--- (can b globally use)
if (true) {
    var varvariable = 'this is true';
}
var varvariable = 'this is false'; //console the latest command and can redeclare
console.log(varvariable);
// let---
if (true) {
    var letvariable_1 = 'this is true';
}
var letvariable = 'this is false'; //console the latest command but cannot redeclare
console.log(letvariable);
// const---
if (true) {
    var constvariable_1 = 'this is true';
}
var constvariable = 'this is not working'; //console the latest command but cannot redeclare
console.log(constvariable);
// const constvar = 1
// let letvar = 1
// //constvar = 2 error // can't change diff value
// letvar = 2
var constvar = { name: 'bob' };
var letvar = 1;
constvar.name = 'sally';
console.log(constvar);
