//turn the array into a string of numbers skipping over all the commas by using join
//insert () to left 0index and to right 3rd index, a space after  and insert - btw 6 and 7 indices using substrings and a conditional
function createPhoneNumber(numbers) {
  let nums = numbers.join("")
  return `(${nums.slice(0, 3) + ')'} ${nums.slice(3, 6) + '-'}${nums.slice(6)}`


}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"