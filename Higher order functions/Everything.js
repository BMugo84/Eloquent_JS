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

// let a = 1>5
// let b = 1 > 10
// console.log(!( !a || !b ))
// console.log(a&&b)
// e => e>5

function every(array,test){
    return !array.some(element => !test(element))
}
console.log(every([1,2,3,4,5], e=> e<6 ))