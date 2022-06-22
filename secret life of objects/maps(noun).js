// let ages = {
//     Boris: 39,
//     Liang: 22,
//     Julia: 62
// }
// console.log(`Julia is ${ages["Julia"]}`)
// console.log(ages["Julia"])
// console.log("Liang" in ages)
// console.log("toString" in ages)

let ages = new Map()
ages.set("Boris",39)
ages.set("Liang", 22)
ages.set("Julia", 62)

console.log(`Julia is ${ages.get("Julia")}`)
console.log( ages.has("toString"))