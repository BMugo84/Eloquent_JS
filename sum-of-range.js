// Write a range function that takes two arguments ,start and encodeURI, and returns an array
// containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the sum of these
//  numbers.Run the example program and see whether it does indeed return 55.
// As a bonus assignment, modify your range function to take an optional third argument that
// indicates the "step" value used when building the array. If no step is given, the elements 
// go up by increments of one, corresponding to the old behaviour.
// the function acll range (1, 10, 2) should return [1, 3,5, 7, 9] .Make sure it also works 
// with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]

function range(start, end) {
    let range = []
    for (let number = start; number >=start && number <= end; number++){
        range.push(number)
    }
    return range
 }
console.log(range(1,10))

function sum(range) {
    let sum = 0
    for (let i = 0; i < range.length; i++) {
        sum += range[i]
        
    }
    return sum
}
console.log(sum(range(1,10)))

// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);