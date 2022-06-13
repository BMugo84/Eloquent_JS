function repeatlog(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
        
    }
}
repeatlog(5,console.log)


let labels = []
repeatlog(5, i => {
    labels.push(`Unit ${i + 1}`)
})
console.log(labels)
