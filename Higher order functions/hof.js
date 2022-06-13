function greaterthan(n) {
    return m => m > n
}
let greaterthan10 = greaterthan(10)
console.log(greaterthan10(11))