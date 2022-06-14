function greaterthan(n) {
    return m => m > n
}
let greaterthan10 = greaterthan(10)
console.log(greaterthan10(11))

function noisy(f){
    return (...args) => {
        console.log("calling with", args)
        let result = f(...args)
        console.log("called with", args, ", returned", result)
        return result
    }
}
noisy(Math.min)(3,2,1)