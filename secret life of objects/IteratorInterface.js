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
