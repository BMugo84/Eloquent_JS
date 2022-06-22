
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
const whiteRabbit = new Rabbit('white');

killerRabbit.speak('Die SCUM!')
blackRabbit.speak('NOOOO!')

Rabbit.prototype.teeth = "small"
console.log(killerRabbit.teeth)

killerRabbit.teeth = "long, sharp and bloody"
console.log(killerRabbit.teeth)

console.log(blackRabbit.teeth)
console.log(Rabbit.prototype.teeth)
console.log(whiteRabbit.teeth)

