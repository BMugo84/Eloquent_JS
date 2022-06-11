// let luigisDebt = 140;
// luigisDebt = luigisDebt - 35;
// console.log(luigisDebt);

// const greeting = "hello ";
// var name = "ben"; 
// console.log(name + greeting)


// let number =0
// while (number<=12) {
//     console.log(number)
//     number = number+2
// }

// let result = 1
// let counter = 0
// while (counter < 10){
//     result = result * 2
//     counter = counter + 1
// }
// console.log(result,counter)



//  let result = 1;
//  for (let counter = 0; counter < 10; counter = counter + 1){
//      result = result * 2;
 
//  }console.log(result)

// let vertice = ""
// let counter = 0
// while (counter<7){
//     vertice = vertice + "#"
//     counter = counter + 1
//     console.log(vertice)

// }console.log(vertice.length)

// let number = 0;
// let counter = 0;
// while (counter<100){
//     number = number + 1
//     counter = counter + 1
//     if (number % 3 == 0 && number % 5 == 0){
//         console.log(number + " fizzbuzz")
//     }
//     else if (number % 5 == 0){
//         console.log(number + " Buzz")
//     }
//     else if (number % 3 == 0 ){
//         console.log(number + " fizz")
//     }
//     else {
//         console.log(number)
//     }
// }

// size = 16
// board = ""
// for(let y = 0; y<size; y++){
//     for(let x=0 ; x<size ; x++ ){
//         if ((x+y)%2 == 0) {
//             board = board + " "
//         } else {
//             board = board + "#"
//         }
//     }
//     board = board + "\n"
// }
// console.log(board)

// const makeNoise = function () {
//     console.log("Pling!")
// }
// makeNoise()

// const power = function(base, exponent){
//     let result = 1
//     let count = 0
//     while (count < exponent){
//         result = result * base
//         count++
//     }
//     return result
// }

// console.log(power(3, 2))

// let x = 10
// if (true) {
//     let y = 20
//     var z = 30
//     console.log(x+y+z)
// }
// console.log(x+y+z)

// const cake = function(factor) {
//     const ingredient = function(amount, unit, name){
//         let ingredientAmount = amount * factor
//         if (ingredientAmount > 1) {
//             unit = unit + "s"
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`)
//     }
//     ingredient(1, 'can', 'chickpeas')
//     ingredient(0.25, 'cup', 'tahini')
//     ingredient(0.25, 'cup', 'lemon juice')
//     ingredient(1, 'clove', 'garlic')
//     ingredient(2, 'tablespoon', 'olive oil')
//     ingredient(0.5, 'teaspoon', 'cumin')
// }

// function square(x) {
//     return x * x
// }
// console.log(square(10))

// console.log("the future says: ", future())
// function future() {
//     return "youll never have flying cars"
// }

// const square = (x) =>{
//     return x * x
// }

// console.log(square(10))

// const greet = (who)=>{
//      console.log("hello" + who)
//      return ("hello" + who)
// }
// greet("harrry")
// console.log("bye")

// const chicken = () =>{
//     return egg()
// }
// const egg = () =>{
//     return chicken()
// }

// console.log(chicken() + " came first")

// const wrapValue = (n) => {
//     let local = n
//     return () => local
// }
// let wrap1 = wrapValue(1)
// let wrap2 = wrapValue(2)
// console.log(wrap1())

// console.log( `half of 100 is ${100 / 2}` )

// function findSolution(target){
//     function find(N, history){
//         if (N == target) {
//             return history
//         } else if (N > target) {
//             return null
//         }else {
//             return find(N + 5, `(${history} + 5)`) ||
//                     find(N * 3, `(${history} * 3)`)
//         }
//     }
//     return find (1, "1")
// }
// console.log(findSolution(0))

// const printfarminventory = (cows, chicken) => {
//     let cowString = String(cows)
//     let chickenString =String(chicken)

//     while (cowString.length < 3) {
//         cowString = "0" + cowString
//     }
//     console.log(`${cowString} cows`)

//     while (chickenString.length < 3) {
//         chickenString = "0" + chickenString
//     }
//     console.log(`${chickenString} chicken`)
// }
// printfarminventory(7, 11)

// const zeroPad = (number, width) => {
//     let string = String(number)
//     while (string.length < width) {
//         string = "0" + string
//     }
//     return string
// }
// const printfarminventory = (cows, pigs, chickens) => {
//     console.log(`${zeroPad(cows, 3)} cows`)
//     console.log(`${zeroPad(pigs, 3)} pigs`)
//     console.log(`${zeroPad(chickens, 3)} chickens`)
// }
// printfarminventory(7,16,12)

// const minimum = (x, y) => {
//     if (x > y) {
//         console.log(`${x} is greater than ${y}`)
//     } else if (y>x) {
//         console.log(`${y} is greater than ${x}`)
//     }
//     else{
//         console.log(`${y} and ${x} are equal`)
//     }
// }
// minimum(7,6)

// const isEven = (N) =>{
//     if (N == 0) {
//         console.log(true)
//     }else if (N == 1) {
//         console.log(false)
//     } 
//     else{
//         return isEven(N-2)
//     }
// }
// isEven(-1)

// console.log("fatehr"[0])

// const countBs = (string) =>{
//     counter = 0
//     N = 0
// while (N<string.length) {
//     if (string[N] == "B") {
//         counter +=1
//         N+=1
        
//     } else {
//         N+=1
//     }
// }
// return counter
// }

// const countChar = (string, char) =>{
//     counter = 0
//     N = 0
// while (N<string.length) {
//     if (string[N] === char) {
//         counter += 1
//         N += 1
        
//     } else {
//         N+=1
//     }
// }
// return counter
// }
// console.log(countChar("kantakkerous", "k"))


// let listofNumbers = [2,4,6,8,10]
// console.log(listofNumbers[3])
// console.log(listofNumbers.length)

// let doh = "doh"
// console.log(doh.toUpperCase())


// let day1 = {
//     squirrel :false,
//     wolf: false,
//     events: ["work","touched tree","pizza","running"]
// }
// console.log(day1.events)
// delete day1.wolf
// console.log(day1.wolf)

// console.log(Object.keys(day1))

// Object.assign(day1, {c: 4, squirrel: true})

// console.log(Object.keys(day1))
// console.log(day1.squirrel)

// let journal = [
//     {
//         events: ["work","touched tree","pizza","running", "television"],
//         squirrel: false
//     },
//     {
//         events: ["work","ice cream","cauliflower","lasagna", "touched tree","brushed teeth"],
//         squirrel: false
//     } ,  
//     {
//         events: ["weekend","cycling ","break","peanuts", "beer"],
//         squirrel: true
//     }
// ]

// const score = {visitors:0 , home: 0}
// console.log(score)
// score.visitors = 1
// console.log(score)

// let journal = []

// const addEntry = (events, squirrel) => {
//     journal.push({events, squirrel})
// }

// addEntry(["work","touched tree","pizza","running", "television"], false)
// addEntry(["work","ice cream","cauliflower","lasagna", "touched tree","brushed teeth"], false)
// addEntry(["weekend","cycling ","break","peanuts", "beer"], true)



// //  console.log(phi([76, 9, 4, 1]));

// var JOURNAL = [
//     {"events":["carrot","exercise","weekend"],"squirrel":false},
//     {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
//     {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
//     {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
//     {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
//     {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
//     {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
//     {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
//     {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
//     {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
//     {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
//     {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
//     {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
//     {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
//     {"events":["brushed teeth","computer","work"],"squirrel":false},
//     {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
//     {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
//     {"events":["brushed teeth","work"],"squirrel":false},
//     {"events":["cauliflower","reading","weekend"],"squirrel":false},
//     {"events":["bread","brushed teeth","weekend"],"squirrel":false},
//     {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
//     {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
//     {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
//     {"events":["spaghetti","nachos","work"],"squirrel":false},
//     {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
//     {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
//     {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
//     {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
//     {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
//     {"events":["potatoes","exercise","work"],"squirrel":false},
//     {"events":["pizza","ice cream","computer","work"],"squirrel":false},
//     {"events":["lasagna","ice cream","work"],"squirrel":false},
//     {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
//     {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
//     {"events":["potatoes","brushed teeth","work"],"squirrel":false},
//     {"events":["carrot","work"],"squirrel":false},
//     {"events":["pizza","beer","work","dentist"],"squirrel":false},
//     {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
//     {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
//     {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
//     {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
//     {"events":["lasagna","peanuts","work"],"squirrel":true},
//     {"events":["pizza","work"],"squirrel":false},
//     {"events":["potatoes","exercise","work"],"squirrel":false},
//     {"events":["brushed teeth","exercise","work"],"squirrel":false},
//     {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
//     {"events":["pizza","cycling","weekend"],"squirrel":false},
//     {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
//     {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
//     {"events":["pizza","peanuts","candy","work"],"squirrel":true},
//     {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
//     {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
//     {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
//     {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
//     {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
//     {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
//     {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
//     {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
//     {"events":["bread","candy","work"],"squirrel":false},
//     {"events":["potatoes","nachos","work"],"squirrel":false},
//     {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
//     {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
//     {"events":["brussel sprouts","running","work"],"squirrel":false},
//     {"events":["brushed teeth","work"],"squirrel":false},
//     {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
//     {"events":["candy","brushed teeth","work"],"squirrel":false},
//     {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
//     {"events":["bread","brushed teeth","weekend"],"squirrel":false},
//     {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
//     {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
//     {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
//     {"events":["lettuce","brushed teeth","work"],"squirrel":false},
//     {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
//     {"events":["pizza","brushed teeth","work"],"squirrel":false},
//     {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
//     {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
//     {"events":["brushed teeth","running","work"],"squirrel":false},
//     {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
//     {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
//     {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
//     {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
//     {"events":["carrot","reading","weekend"],"squirrel":false},
//     {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
//     {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
//     {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
//     {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
//     {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
//     {"events":["lettuce","brushed teeth","work"],"squirrel":false},
//     {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
//     {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
//   ];

//     // This makes sure the data is exported in node.js —
//     // `require('./path/to/04_data.js')` will get you the array.
//     if (typeof module != "undefined" && module.exports)
//     module.exports = JOURNAL;


//     function phi(table) {
//         return (
//             table[3] * table[0] - table[2] * table[1]) /
//             Math.sqrt(
//                 (table[2] + table[3]) * (table[0] + table[1]) *
//                 (table[1] + table[3]) * (table[0] + table[2])
//             )
//     }

// function tableFor(event, journal) {
//     let table = [0, 0, 0, 0]
//     for (let i = 0; i < journal.length; i++) {
//         let entry = journal[i], index = 0
//         if (entry.events.includes(event)) {
//             index +=1
//         }
//         if (entry.squirrel) {
//             index +=2
//         }
//         table[index] +=1
        
//     }
// return table
    
// }
// // console.log(tableFor("work", JOURNAL))
// // console.log(JOURNAL.length)

// function journalEvents(journal){
//     let events = []
//     for (let entry of journal){
//         for (let event of entry.events){    
//             if (!events.includes(event)) {
//                 events.push(event);
//             }
//         }
//     }
//     return events
// }
// console.log(journalEvents(JOURNAL))

// // for(let event of journalEvents(JOURNAL)){
// //     console.log(event + ":", phi(tableFor(event, JOURNAL)))
// // }

// for(let event of journalEvents(JOURNAL)){
//    let correlation = phi(tableFor(event, JOURNAL))
//     if (correlation > 0.1 || correlation < -0.1) {
//         console.log(event + ":" , correlation)
//     }
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let test = [1,2,3,4,5]
// test.push(6)
// console.log(test)
// test.shift(0)
// console.log(test)
// test.unshift(1)
// console.log(test)
// test.unshift(0)
// console.log(test)
// test.shift()
// console.log(test)

// let todolist = []
// function remember(task) {
//     todolist.push(task)
// }
// function getTask() {
//     return todolist.shift()
// }
// function rememberUrgently(task) {
//     todolist.unshift(task)
// }

// remember("groceries")
// remember("snacks")
// remember("knives")
// console.log(todolist)
// getTask("groceries")
// console.log(todolist)
// rememberUrgently("toiletries")
// console.log(todolist)
// console.log(todolist.indexOf("knives"))

// let power = ["a","b","c","d","e"]
// console.log(power.slice(0,2))
// console.log(power.slice(3))
// console.log(power.slice(0,2).concat(power.slice(3)))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let sentence = "cdf municipal council development fund"
// let words = sentence.split(" ")
// console.log(words.join("-"))

// function splitter(string) {
//     let sentence = string
//     let words = sentence.split(" ")
//     console.log(words)
// }
// splitter("municipal council order")

// function add(...nums) {
//     console.log(numbers)
// }console.log(add(10,20,40))

// function max(...numbers) {
//     let result = -Infinity
//     for (let number of numbers) {
//         if (number > result) {
//             result = number
//         }
        
//     }
//     return result00
// }console.log(max(4,10,20,30))

// function randomPointOnCircle(radius) {
//     let angle = Math.random() * 2 * Math.PI
//     return {
//         x: radius * Math.cos(angle),
//         y: radius * Math.cos(angle)
//     }
// }console.log(randomPointOnCircle(20))
