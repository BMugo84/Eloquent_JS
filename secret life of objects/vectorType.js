
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

class Vector {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(vector) {
        console.log(`test ${this.x + vector.x} ,${this.y + vector.y}`)
    }
    minus(vector) {
        console.log(`test ${this.x - vector.x},${this.y - vector.y} `)
    }

}
let vec1 = new Vector(2,3)
let vec2 = new Vector(4,5)


vec1.plus(vec2)
vec1.minus(vec2)
