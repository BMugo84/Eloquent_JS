// Your own loop
// Write a higher-order function loop that provides something like a for loop
// statement. It takes a value, a test function, an update function, and a body
// function. Each iteration, it first runs the test function on the current loop value
// and stops if that returns false. Then it calls the body function, giving it the
// current value. Finally, it calls the update function to create a new value and
// starts from the beginning.
// When defining the function, you can use a regular loop to do the actual
// looping

// for (let number = 0; number < 12; number++) {
//   console.log(number)
    
// }

function forLoop(value, test_function,update_function,body_function) {
  let start = value //initialization
  while (test_function(start) ) { //condition
    body_function(start) //body
    start = update_function(start) //repetition
  }
}
forLoop(3, n => n>0,n => n-1,console.log)
console.log(5*5)

// function loop(start, test, update, body) {
//   for (let value = start; test(value); value = update(value)) {
//     body(value);
//   }
// }

// loop(3, n => n > 0, n => n - 1, console.log)