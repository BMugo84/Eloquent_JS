// Proototypes are objects that js uses as a fallback source of properties
let empty = {}
console.log(empty.toString)
console.log(empty.toString())

console.log(Object.getPrototypeOf({}) == Object.prototype)
console.log(Object.getPrototypeOf(Object.prototype))
console.log(Object.getPrototypeOf({}))

console.log(Object.getPrototypeOf(Math.max) == Function.prototype)
console.log(Object.getPrototypeOf([]) == Array.prototype)


let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
}

let sniperRabbit = Object.create(protoRabbit)
sniperRabbit.type = 'Sniper'
sniperRabbit.speak('KABOOM!')



