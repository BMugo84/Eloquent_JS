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
                this.content[y * width + x] = elemnt(x, y)
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
