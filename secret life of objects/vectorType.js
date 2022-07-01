class Vector {
    constructor(width,height, element = (x,y) => undefined) {
         this.width = width; 
         this.height = height;
         this.content = [];

         for (let y = 0; y < 3 ; y++) {
            for (let x = 0; x < 2; x++) {
                this.content[y * width + x] = element(x,y);
            }   
         }
     }

    get(x,y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
   } 
}

class VectorIterator{
    constructor(vector){
        this.x = 0;
        this.y = 0;
        this.vector = vector
    }

    next(){
        if (this.y == this.vector.height) return {done: true }

        let value = {
            x: this.x,
            y: this.y,
            value: this.vector.get(this.x, this.y)
        }
        this.x++

        if (this.x == this.vector.width) {
            this.x = 0
            this.y++
        }
        return {value, done: false}
    }
}

Vector.prototype[Symbol.iterator] = function() {
    return new VectorIterator(this)
}

let vector = new Vector(1,2, (x,y) => `value ${x}, ${y}`)
for (let {x, y, value}of vector){
    console.log(` x is ${x},  y is ${y},  ${value}`)
}
