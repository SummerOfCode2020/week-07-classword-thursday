/**
Now let's remove ourReduce() and substitute in JavaScript's reduce() and see that it works the same way.

 */

 function sum(acc, n) {
  return acc + n
}

function ourReduce(arr, func, acc) {
  for(let i = 0; i < arr.length; i++) {
    acc = func(acc, arr[i])
  }

  return acc
}

const arr = [1, 2, 3, 4, 5]
const retVal = arr.reduce(sum, 0)

console.log(retVal)
console.log(arr)
