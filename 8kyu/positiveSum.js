function positiveSum(arr) {
    const red = arr.reduce((acc,curr) => curr > 0 ? acc += curr : acc, 0)
    return red
}

function positiveSum(arr) {
    return arr.reduce((a,b) => a + (b > 0 ? b : 0), 0)
}