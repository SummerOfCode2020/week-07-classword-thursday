/* 
    Immunity Challenge: 
    `double` is missing from this file
    Add code to declare `double` as exported from the slide19 file
*/

const { double } = require('./slide20')

const arr = [1, 2, 3, 4]
const reVal = arr.map(double)

console.log(reVal)
console.log(arr)
