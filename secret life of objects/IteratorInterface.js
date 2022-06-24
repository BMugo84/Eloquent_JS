let okIterator = "OK"[Symbol.iterator]()
console.log(okIterator.next())
console.log(okIterator.next())
console.log(okIterator.next())
console.log(okIterator.next())

class Matrix {
    constructor(width, height, element = (x, y) => undefined){
        this.width = width
        this.height = height
        this.content = []

        for (let y = 0; y < height; y++){
            for (let x = 0; x < width; x++){
                this.content[y * width + x] = element(x, y)
            }
        }
    }
    get(x,y){
        return this.content[y * this.width + x]
    }
    set(x, y, value){
        this.content[y * this.width + x] = value
    }
}

// The class stores its content in a single array of width × height elements. The
// elements are stored row by row, so, for example, the third element in the fifth
// row is (using zero-based indexing) stored at position 4 × width + 2.
// The constructor function takes a width, a height, and an optional element
// function that will be used to fill in the initial values. There are get and set
// methods to retrieve and update elements in the matrix.

class MatrixIterator {
    constructor(matrix){
        this.x = 0
        this.y = 0
        this.matrix = matrix
    }

    next(){
        if (this.y == this.matrix.height) return {done: true}

        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        }

        this.x++
        if (this.x == this.matrix.width){
            this.x = 0
            this.y++
        }
        return {value, done:false}
    }
}
// let the iterator produce objects with x,y and value properties to monitor the position
//  of the elements as well as the elements themselves
// The class tracks the progress of iterating over a matrix in its x and y properties.
// The next method starts by checking whether the bottom of the matrix
// has been reached. If it hasn’t, it first creates the object holding the current
// value and then updates its position, moving to the next row if necessary.

Matrix.prototype[Symbol.iterator] = function(){
    return new MatrixIterator(this)
}

let matrix = new Matrix(1,1, (x,y) => `value ${x}, ${y}`)
for (const {x,y, value} of matrix) {
    console.log(x,y, value)
}

//reference https://stackoverflow.com/questions/51942079/why-do-we-use-symbol-iterator-instead-of-a-for-loop

// Explanation

// /**
//  * Class for creating matrix instances.  A matrix instance represents
//  * a matrix data structure, or grid of values, where each value can be
//  * accessed using x, y coordinates of the location of the value in the matrix.
//  */
//  class Matrix {
    
//     /**
//      * Constructor of the Matrix class which runs when Matrix is called
//      * with the`new` keyword creating a new Matrix instance.
//      * @param width The number of columns in the matrix.
//      * @param height The number of rows in the matrix.
//      * @param element A callback allowing you to initialize the matrix
//      * with values.  When the constructor is called, the callback, if
//      * provided, will be called for each element of the matrix passing
//      * in the x, y coordinates of the element's position as arguments.
//      */
//     constructor(width, height, element = (x, y) => undefined) {
//       // ^ above, element (the callback) has a default value of an arrow function
//       // that returns undefined whenever its called, no matter what the values of
//       // x and y.  This will only be used if, when created, nothing is provided
//       // for the element parameter
      
//       // set instance properties for the new Matrix instance
//       this.width = width; // num of matrix columns
//       this.height = height; // num of matrix rows
//       this.content = []; // matrix elements' values
      
//       // note: though matrix data would more accurately be represented in
//       // a 2D array, a single array is used here to contain all rows in a
//       // contiguous set of values looking something like (width = 4):
//       // | -- row 1 -- | -- row 2 -- | -- row 3 -- ...
//       // [ 1, 2, 3, 4,   1, 2, 3, 4,   1, 2, 3, 4, ...]
  
//       // loop through the rows and columns calling the element callback
//       // to pre-populate the data in the matrix
//       for (let y = 0; y < height; y++) {
//         for (let x = 0; x < width; x++) {
          
//           // call the callback, getting its value and assigning it to the
//           // content array.  Because the array is a single dimension, the
//           // formula y * width + x is used to identify the index in the array
//           // relating to the x, y location in the matrix (see note above)
//           this.content[y * width + x] = element(x, y);
//         }
//       }
//     }
  
//     /**
//      * Get a value in the matrix.
//      * @param x Row location to retrieve value.
//      * @param y Column location to retrieve value.
//      * @returns Value in the matrix at the specified x, y location.
//      */
//     get(x, y) {
//       // ^ note that though this uses the identifier "get" it is not
//       // a property getter, rather, simply a function named "get" which
//       // is still allowed (same applies to "set")
//       return this.content[y * this.width + x];
//     }
  
//     /**
//      * Set a value in the matrix.
//      * @param x Row location to set value.
//      * @param y Column location to set value.
//      * @param value Value to set in the matrix.
//      */
//     set(x, y, value) {
//       this.content[y * this.width + x] = value;
//     }
//   }

// expalnation for matrix iterator

// /**
//  * Class for creating matrix instances.  A matrix instance represents
//  * a matrix data structure, or grid of values, where each value can be
//  * accessed using x, y coordinates of the location of the value in the matrix.
//  */
//  class Matrix {
    
//     /**
//      * Constructor of the Matrix class which runs when Matrix is called
//      * with the`new` keyword creating a new Matrix instance.
//      * @param width The number of columns in the matrix.
//      * @param height The number of rows in the matrix.
//      * @param element A callback allowing you to initialize the matrix
//      * with values.  When the constructor is called, the callback, if
//      * provided, will be called for each element of the matrix passing
//      * in the x, y coordinates of the element's position as arguments.
//      */
//     constructor(width, height, element = (x, y) => undefined) {
//       // ^ above, element (the callback) has a default value of an arrow function
//       // that returns undefined whenever its called, no matter what the values of
//       // x and y.  This will only be used if, when created, nothing is provided
//       // for the element parameter
      
//       // set instance properties for the new Matrix instance
//       this.width = width; // num of matrix columns
//       this.height = height; // num of matrix rows
//       this.content = []; // matrix elements' values
      
//       // note: though matrix data would more accurately be represented in
//       // a 2D array, a single array is used here to contain all rows in a
//       // contiguous set of values looking something like (width = 4):
//       // | -- row 1 -- | -- row 2 -- | -- row 3 -- ...
//       // [ 1, 2, 3, 4,   1, 2, 3, 4,   1, 2, 3, 4, ...]
  
//       // loop through the rows and columns calling the element callback
//       // to pre-populate the data in the matrix
//       for (let y = 0; y < height; y++) {
//         for (let x = 0; x < width; x++) {
          
//           // call the callback, getting its value and assigning it to the
//           // content array.  Because the array is a single dimension, the
//           // formula y * width + x is used to identify the index in the array
//           // relating to the x, y location in the matrix (see note above)
//           this.content[y * width + x] = element(x, y);
//         }
//       }
//     }
  
//     /**
//      * Get a value in the matrix.
//      * @param x Row location to retrieve value.
//      * @param y Column location to retrieve value.
//      * @returns Value in the matrix at the specified x, y location.
//      */
//     get(x, y) {
//       // ^ note that though this uses the identifier "get" it is not
//       // a property getter, rather, simply a function named "get" which
//       // is still allowed (same applies to "set")
//       return this.content[y * this.width + x];
//     }
  
//     /**
//      * Set a value in the matrix.
//      * @param x Row location to set value.
//      * @param y Column location to set value.
//      * @param value Value to set in the matrix.
//      */
//     set(x, y, value) {
//       this.content[y * this.width + x] = value;
//     }
//   }

// https://www.reddit.com/r/learnjavascript/comments/cdbq26/eloquent_javascript_chapter_6_confusion/