let myName = 'Tabita'  // string dataType

//let, const, var  _

const age = 25;   // number 

var address ='ISB';

console.log("My name is", myName);
console.log("age is ", age);
console.log("address is", address);

// var--- (can b globally use)

if(true){
var varvariable = 'this is true'
}
var varvariable = 'this is false' //console the latest command and can redeclare
console.log(varvariable)

// let---

if(true){
    let letvariable = 'this is true'
    }
    let letvariable = 'this is false' //console the latest command but cannot redeclare
    console.log(letvariable)

// const---

if(true){
    const constvariable = 'this is true'
    }
    const constvariable = 'this is not working' //console the latest command but cannot redeclare
    console.log(constvariable)


// const constvar = 1
// let letvar = 1

// //constvar = 2 error // can't change diff value
// letvar = 2

const constvar = {name: 'bob'} //can't change values but properties
let letvar = 1

constvar.name = 'sally' // it allow to change diff properties init 

console.log(constvar)



    