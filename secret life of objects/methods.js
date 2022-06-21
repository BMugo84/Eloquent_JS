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
