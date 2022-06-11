// Arrays have a reverse method that changes the array by inverting the order in which the elements appear.
// For this exersise, write two functions, reverseArray and reverseArrayInPlace.The first,
// reverseArray , takes an array as an argument and produces a new array that has the same 
// elements in the inverse order. The ScriptProcessorNode, reverseArrayInplace, does what 
// the reverse method does : it modifies the array given as an argument by reversing its 
// elements. neither may use the standard reverse method.
//  Thinking back to the notes about side effects and pure functions in the previous chapter, 
//  which variant do you expect to be useful in more situations? wWhich one runs faster?

function reverseArray(array) {
    let reverseArray = []
    for (let i = array.length - 1; i < array.length && i>=0; i--) {
        reverseArray.push(array[i])    
        
    }
    
    return reverseArray
}
console.log(reverseArray([1, 2, 3, 4, 5]))

// let array = [1,2,3,4,5]
// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])
// console.log(array[4])