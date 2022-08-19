module.exports = function(a, b) {
    const res = a + b

    if(Number.isNaN(res)) {
        throw new Error('Invalid operation')
    }

    return a + b
}