// [1,2,3,4,5].forEach(l => console.log(l <5))

// function every(array, predicatefn) {
    
// }

function every(array, test){
    for (const element of array) {
        if (!test(element)){
            return false
        }
    }
    return true
    
}
console.log(every([1,2,3,7,4,5], l=> l<6))

// function every(array, predicatefn) {
    
// }
