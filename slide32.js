/*
Let's implement ourReduce() so we can see exactly what is happening. We'll start with a sum() function that will take two numbers and return their sum. In ourReduce() we will take in our array and function as we've seen before but this time we'll include the initial value of the accumulator, in this case we'll start with 0.

We're going to loop over our array and call the sum() function passing in the current accumulator and the current item of the array. We will then assign the return value to the accumulator. This means as we loop over the array, the accumulator will continue to hold the summation of all the numbers we see. Once we've visited the whole array, we return the final value of the accumulator.

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
const retVal = ourReduce(arr, sum, 0)

console.log(retVal)
console.log(arr)
