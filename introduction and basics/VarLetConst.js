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