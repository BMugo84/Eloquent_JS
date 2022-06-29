// In this problem you have to complete the multiplyAll() function, and takes a
//  multi-dimensional array as an argument. Remember that a multi-dimensional
//   array, sometimes called a 2D array, is just an array of arrays, for example,
//    [[1,2], [3,4], [5,6]].

function multiplyAll(arr) {
    let product = 1
    // only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
            
        }
        
    }

    // only change code above this line
    return product
}
multiplyAll([[1,2],[3,4],[5,6,7]])