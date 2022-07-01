
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
    get length() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y))
    }
    multiplyScalar(scalar){
        console.log(`test ${this.x * scalar}, ${this.y * scalar}`)
    }
    dotProduct(vector,cosTheta){
        console.log(`test ${this.length * vector.length * Math.cos(cosTheta * Math.PI/180)}`)
    }

    static fromDegree(vector){
        return Math.acos( (this.x * vector.x) + (this.y * vector.y)/Math.sqrt(((Math.pow(this.x,2)) + (Math.pow(this.y,2))) * ((Math.pow(vector.x,2)) + (Math.pow(vector.y,2)))))
    }
    
    crossProduct(vector){
        console.log(` test ${this.length * vector.length * Math.sin(Vector.fromDegree(vector))} `)
    }

}
let vec1 = new Vector(6,8)
let vec2 = new Vector(5,12)


vec1.plus(vec2)
vec1.minus(vec2)
console.log(vec1.length)
console.log(vec2.length)
vec1.multiplyScalar(2)

vec1.dotProduct(vec2,59.5)
vec1.crossProduct(vec2)
