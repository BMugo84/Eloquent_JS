//refer to previous code in classes.js

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