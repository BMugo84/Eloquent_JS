// difference between var, let const
 var greeter = "say hi"      //globally scoped
function newfunction() {
    var hello = hello       //function(locally) scoped . can only be accesed byb the function    
}
// console.log(hello)

// var variables can be redeclared and updated

var greeter = "say hello"
console.log(greeter)
var greeter = "say hi instead"
console.log(greeter)

// hoisting of var

console.log (responder)
var responder = "say hey ho"
// problem with var

var greeter = "hey hi"
var times = 4

if (times>3) {
    var greeter = "say hello instead"
}
console.log(greeter)

// let

let greeting = "say hi"
let time = 4

if (times > 3) {
    let hello = "say Bonjour instead"
   console.log(hello)
}
console.log(greeting)


//updating 

let greeted = "say Hi"
greeted = "say hello instead"
console.log(greeted)

