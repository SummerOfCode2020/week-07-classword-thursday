function double(number) {
  return number * 2
}

const number = 10
const result = double(number)
const number2 = 20
const result2 = double(number2)
// we will expect 20
// console.log({number, result})
// console.log({number2, result2})
/* 
    Immunity Challenge: 
    Add code to allow other files to access our `double` function
*/
module.exports = { 
  double
} 

