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

