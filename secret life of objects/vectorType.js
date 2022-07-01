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

//the correct code according to the book

// Look back to the Rabbit class example if you’re unsure how class declarations
// look.
// Adding a getter property to the constructor can be done by putting the
// word get before the method name.
// To compute the distance from (0, 0) to
// (x, y), you can use the Pythagorean theorem, which says that the square of
// the distance we are looking for is equal to the square of the x-coordinate plus
// the square of the y-coordinate.
// Thus, (x.sqrd + y.sqrd)sqrt is the number you want, and
// Math.sqrt is the way you compute a square root in JavaScript.