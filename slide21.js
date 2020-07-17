/* 
    Immunity Challenge: 
    `double` is missing from this file
    Add code to declare `double` as exported from the slide19 file
*/

const { double } = require('./slide20')
function ourMap(ages, callBack) {
  let newArr = []

  for(let i = 0; i < ages.length; i++) {
    newArr.push(callBack(ages[i])) 
  }

  return newArr
}

const arr = [1, 2, 3, 4]
const reVal = ourMap(arr, double)

console.log(reVal)
console.log(arr)
