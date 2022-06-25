// symmetric matrix -> A matrix is said to be symmetric if all elements above the main
// diagonal are reflected into equal entries below the diagonal
// test case
//
//             (1)      2      -1
//              
//              2      (1)      3
//              
//             -1       3      (0)
//              

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



class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y)=> undefined){
        super(size, size, (x, y) => {
            if (x < y) return element(y, x)
            else return element(x, y)
        })
    }
    set (x, y, value){
        super.set(x,y,value)
        if (x !=y){
            super.set(y, x, value)
        }
    }
   
}
let matrix = new SymmetricMatrix(5,  (x, y) => `${x}, ${y}`)
console.log(matrix.get(2, 3))

let a = 1
console.log(a>1)
