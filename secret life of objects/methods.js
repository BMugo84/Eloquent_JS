function speak(line) {
    console.log(`The ${this.type} rabbit said '${line}'`)
}
// rabbit.speak("I'm alive")
// this points to the object that it was called on

let whiteRabbit = {type: "white", speak}
let hungryRabbit = {type: "hungry", speak}
 
whiteRabbit.speak("I hate the RAIN! Makes my fur all wet and dirty")
hungryRabbit.speak("All these juicy carrots make me drool!")

speak.call(hungryRabbit, "burp")

function normalize(){
    console.log( this.coords.map(n => n/ this.length) )
}
normalize.call({coords: [0, 2, 3], length: 5 })

// const numbers = [1, -1, 2, 3]
//  const filtered = numbers.filter(n => n >= 0)
//  const items = filtered.map(n => '(' + n + ')')

//  console.log(items)