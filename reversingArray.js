// Arrays have a reverse method that changes the array by inverting the order in which the elements appear.
// For this exersise, write two functions, reverseArray and reverseArrayInPlace.The first,
// reverseArray , takes an array as an argument and produces a new array that has the same 
// elements in the inverse order. The ScriptProcessorNode, reverseArrayInplace, does what 
// the reverse method does : it modifies the array given as an argument by reversing its 
// elements. neither may use the standard reverse method.
//  Thinking back to the notes about side effects and pure functions in the previous chapter, 
//  which variant do you expect to be useful in more situations? wWhich one runs faster?

// function reverseArray(array) {
//     let reverseArray = []
//     for (let i = array.length - 1; i < array.length && i>=0; i--) {
//         reverseArray.push(array[i])     
//     }
    
//     return reverseArray
// }
// console.log(reverseArray([1, 2, 3, 4, 5]))

function reverseArrayInPlace(array) {
    for (let step = 0; step < array.length; step++) {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            index
        }
        
    }
}
console.log(reverseArrayInPlace([10,20,30,40,50]))

// array = [1,2,3,4,5]
// firstArray = array[0]
// let index = array.length - 1
// let last = array[index]

// function moveElementtoFirstplace(last) {
//     array.unshift(last)
//     array.pop()
// }

// moveElementtoFirstplace(last)

// console.log(array)



// while (last != array[index]) {
//     function moveElementtoFirstplace(last) {
//         array.unshift(last)
//         array.pop()
//     }
    
//     moveElementtoFirstplace(last)
// }
// console.log(array)

// let length = array.length;
// let oddNumber = 1
// let oddNumber = oddNumber + 2
// let index = length - oddNumber

// function reverseArrayinPlace(array) {
//     for (let oddNumber = 1; oddNumber < Math.floor(array.length / 2); oddNumber+=2) {
//         index = array.length - oddNumber
//         function moveElementToLastSpace(array) {
//             newLast = array[index]
//             array.push(newLast)
//         }
        
//     }
//     return moveElementToLastSpace(array)
// }
// console.log(reverseArrayinPlace[1,2,3,4,5])


// Taking line by line:

// for (var i = 0; i < Math.floor(array.length / 2); i++) {
//     loops the array from 0 to the half of the array (rounded to lower number), 
// increases i by one each time.
    
//     var old = array[i];
//     temporarely stores the current value of the array at the position i in the variable old.
    
//     array[i] = array[array.length - 1 - i];
//     sets the value of the i position to the value of the last element of the array 
// minus the current i.
    
//     array[array.length - 1 - i] = old;
//     sets the value of the last element of the array minus the current i to the previous 
// value (stored in the old variable).
    
//     In a nutshell, here is what's happening in a practical situation:
    
//     old will store the current looped value. Such value will be replaced to the last value
//  MINUS the current index. Basically, when i is 0, array[0] becomes array[4] and vice-versa.
//  when i is 1 array[1] will become array[3] and vice versa. the [array.length - 1 - i] is 
// necessary because indexes in array starts from 0, so array.length - 1 is the last element 
// of array, while -i moves the offset by i, which makes it possible to switch the value of
//  the first element with the last one and vice-versa


function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
       var old = array[i];
       array[i] = array[array.length - 1 - i];
       array[array.length - 1 - i] = old;
    }
    return array;
 }

 var arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);