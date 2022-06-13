function repeatlog(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
        
    }
}
repeatlog(5,console.log)
