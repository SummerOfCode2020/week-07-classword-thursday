/* 
    Immunity Challenge: 
    `double` is missing from this file
    Add code to declare `double` as exported from the slide19 file
*/

function ourMap(ages, func) {
  let newArr = []

  for(let i = 0; i < ages.length; i++) {
    newArr.push(func(ages[i])) 
  }

  return newArr
}

const arr = [1, 2, 3, 4]
const reVal = ourMap(arr, double)

console.log(retVal)
console.log(arr)
