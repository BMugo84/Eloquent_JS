// When a piece of code is written to work with objects that have a certain
//  interface—in this case, a toString method—any kind of object that happens
//  to support this interface can beplugged into the code, and it will just work.

class Rabbit{
    constructor(type){
        this.type = type
    }
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}' `)
    }
}
let killerRabbit = new Rabbit('killer')
const blackRabbit = new Rabbit('Black');

killerRabbit.speak('Die SCUM!')
blackRabbit.speak('NOOOO!')

Rabbit.prototype.toString = function(){
    return `a ${this.type} rabbit`
}
console.log(String(blackRabbit))