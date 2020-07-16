/*

Let's explore the reduce() higher order function. This one has some similarities with map() and filter() but with one major difference. As we'd expect, reduce() is called on an array, is passed a function and iterates over the array calling the function and passing in each item. Where it differs is that reduce() is not building a new array, but rather a single value. To do this, we also pass in an initial value along with our function that reduce() uses to start the process off. This value is referred to as an accumulator since it is accumulating information as it is passed in with each item.

The function passed to reduce() will take two parameters. The first will be the current value of the accumulator and the second is the current item of the array. The return value of this function becomes the new accumulator value. This is why we need an initial value, it is passed in with the first item in the array and the return value from this call will be passed in as the accumulator with the second item of the array and so on down the line. When we're done iterating over the array the final value of the accumulator is what reduce returns.

MDN JavaScript Array reduce Documentation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

*/

/*
 Task: Using previous JS files as a reference, recreate a working example of this slide using `reduce`
*/