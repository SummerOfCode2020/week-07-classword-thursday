/**
Once again, we'll to our refactoring to use an anonymous function passed in directly.
 */

 function ourReduce(arr, func, acc) {
  for(let i = 0; i < arr.length; i++) {
    acc = func(acc, arr[i])
  }

  return acc
}

const arr = [1, 2, 3, 4, 5]
const retVal = arr.reduce(function (acc, n) {
  return acc + n
}, 0)

console.log(retVal)
console.log(arr)
