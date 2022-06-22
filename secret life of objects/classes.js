function makeRabbit(type){
    let rabbit = Object.create(protoRabbit)
    rabbit.type = type ;
    return rabbit
    
}
let protoRabbit = {speak(line){
    console.log(`The ${this.type} rabbit says '${line}'`)
}
}

let funnyRabbit = makeRabbit('funny')

funnyRabbit.speak('haha')


function Rabbit(type){
    this.type = type
}
Rabbit.prototype.speak = function(line){
    console.log(`The ${this.type} rabbit says '${line}' `)
}
let weirdRabbit = new Rabbit('weird')

weirdRabbit.speak('Booga Wooga')
console.log(Object.getPrototypeOf(Rabbit)==Function.prototype)
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype)