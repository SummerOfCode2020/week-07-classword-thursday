// Following the same process as we did with filter(), 
// let's move our double() function 
// to be an anonymous function that is defined and passed in.

const investment = [1, 2, 3, 4]
const doubledValues = investment.map((n) => {
  return n * 2
})

console.log({doubledValues})
console.log({investment})
