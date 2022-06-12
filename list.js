// Objects, as generic blobs of values, can be used to build all sorts of data structures.
// A common data structure is the list (not to be confused with array). A
// list is a nested set of objects, with the first object holding a reference to the
// second, the second to the third, and so on.

// let list = {
//     value: 1,
//     rest: {
//      value: 2,
//      rest: {
//          value: 3,
//          rest: null
//         }
//     }
// }

// The resulting objects form a chain, like this:
// value: 1
// rest:
//      -------►// value: 2
                // rest:
//                      -------►// value: 3
                                // rest: null

// A nice thing about lists is that they can share parts of their structure. For
// example, if I create two new values {value: 0, rest: list} and {value: -1,
// rest: list} (with list referring to the binding defined earlier), they are both
// independent lists, but they share the structure that makes up their last three
// elements. The original list is also still a valid three-element list.

// Write a function arrayToList that builds up a list structure like the one
// shown when given [1, 2, 3] as argument. Also write a listToArray function
// that produces an array from a list. Then add a helper function prepend, which
// takes an element and a list and creates a new list that adds the element to the
// front of the input list, and nth, which takes a list and a number and returns
// the element at the given position in the list (with zero referring to the first
// element) or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.


// let list = {
//     value: 1,
//     rest: ''
// }
// Object.assign(list, {rest: {
//     value: 2,
//     rest: ''
// }})


// console.log(list.rest)


// function arrayToList(array) {

//     for (let i = 0; i < array.length; i++) {
//         let list = {
//             value: array[i],
//             rest:  ''
//             }
//         Object.assign(list, {rest:
//                                     {   value: array[i+1],
//                                         rest: ''
//                                     }
//         })
        
//     }
//     console.log(list)
// }
// console.log(arrayToList[1])

// let objectA = {a:1, b: ''}
// console.log(objectA)
// while (objectA.b == '') {
//     Object.assign(objectA, {b:{a:2,b:''}})
//     while (objectA.b.b == '') {
//         Object.assign(objectA, {b:{a:2,b:{a:3,b:''}}})
//     }
// }
// console.log(objectA)
// console.log(objectA.b)
// console.log(objectA.b.b)

// let list = {value:array[i],rest: ''}
// while (condition) {
    
// }

// for (let i = 0; i < array.length; i++) {
//     let list = {value: i,rest: null}
//     Object.assign(list, rest:{value:i+1,rest: null})
    
// }
// console.log(list)

function arrayToList(array) {
    let list = {}
    for (let i = 0; i < array.length; i++) {
        if (i == array.length) {
            return list.rest = null
        }
        
        // Object.assign(list ,{value: array[i],rest: {list}})
        list = {value: array[i], rest:list}
        
    }
    return list
}
console.log(JSON.stringify(arrayToList([1,2,3])))

 
// let list = {value:1 , rest: null}
// console.log(list)
// Object.assign(list, {rest:{list}})
// console.log(list.rest.list.rest.list)