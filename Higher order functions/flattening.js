//Use the reduce method in combination with the concat method to “flatten”
//an array of arrays into a single array that has all the elements of the original
//arrays


// let arr = [[1,2,3,4,5],[6,7,8],[9,10]]
// console.log(JSON.stringify(arr))
// console.log(arr[0])
// let space = []
// for (const array of arr) {
//     space.push(array)
// }
// console.log(space)
// console.log(space.concat(arr[0]))

function flatten(arr) {
   let array = arr.reduce((a, b) => a.concat(b)) 
   return array
}
console.log(flatten([[1,2,3,4,5],[6,7,8],[9,10],[11,12,13,14,15]]))