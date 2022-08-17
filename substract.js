module.exports = function sum(a, b) {
  if(b > a) {
    throw new Error('Negative result is not allowed')
  }
  
  return a - b
}