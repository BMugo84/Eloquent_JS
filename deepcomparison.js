// The == operator compares objects by identity.But sometimes you prefer to compare the 
//values of their actual properties.

//Write a function deepEqual tht takes two values and returns true only if they are the 
//same value or are objects with the same properties, where the values of the properties 
//are equal when compares with a recursive call to deepEqual.

//To find out whether values should be compared directly (use the === operator for that)
//or have their properties compares, you can use the typeof operator. If it produces 
//"object" for both values, you should do a deep comparison. But you have to take one silly
//exception into account: because of a historical accident, typeof null also produces "object".

//The Object.keys function will be useful when you need to go over the properties of objects to
// compare them.






// function deepEqual(a,b) {
//     if (typeof(a) == 'object' && typeof(b)=='object' && a && b) {
//         if (Object.keys(a).length != Object.keys(b).length) return false
//             for (var key in a) if (!deepEqual(a[key], b[key])) return false
//             return true 
        
        
//     }
//     else return a === b

// }

function deepEqual(a,b) {
    if (typeof(a) == 'object' && typeof(b)=='object' && a && b) {
        
            return true 
        
        
    }
    

}

var obj =  {value:1,object:1}
var obj1 = {value:1,object:1}
console.log(deepEqual(obj,obj1))
// var key = Object.keys(obj)
console.log(Object.keys(obj).length == Object.keys(obj).length)
console.log(typeof(obj))
