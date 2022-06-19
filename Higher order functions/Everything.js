// Analogous to the some method, arrays also have an every method. This one
// returns true when the given function returns true for every element in the array.
// In a way, some is a version of the || operator that acts on arrays, and every is
// like the && operator.

// Implement every as a function that takes an array and a predicate function
// as parameters. Write two versions, one using a loop and one using the some
// method.

// HINT
// Like the && operator, the every method can stop evaluating further elements
// as soon as it has found one that doesn’t match. So the loop-based version
// can jump out of the loop—with break or return—as soon as it runs into an
// element for which the predicate function returns false. If the loop runs to its
// end without finding such an element, we know that all elements matched and
// we should return true.
// To build every on top of some, we can apply De Morgan’s laws, which state
// that a && b equals !(!a || !b). This can be generalized to arrays, where all
// elements in the array match if there is no element in the array that does not
// match

// [1,2,3,4,5].forEach(l => console.log(l <5))

// function every(array, predicatefn) {
    
// }

// function every(array, test){
//     for (const element of array) {
//         if (!test(element)){
//             return false
//         }
//     }
//     return true
    
// }
// console.log(every([1,2,3,7,4,5], l=> l<6))

function every(array, predicatefn) {
    if (!array.some(element => !predicatefn(element))) {
        return `some elements don't satisfy the function`
    }
    return `all elements satisfy the function`
}

console.log(every([1,2,3,4,5], e=> e>1 ))

// for reference https://stackoverflow.com/questions/62580919/eloquent-javascript-chapter-5-exercise-question-using-array-some

// let a = 1>5
// let b = 1 > 10
// console.log(!( !a || !b ))
// console.log(a&&b)
// e => e>5

function every(array,test){
    return !array.some(element => !test(element))
}
console.log(every([1,2,3,4,5], e=> e<6 ))