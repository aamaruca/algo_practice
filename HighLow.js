function highAndLow(numbers){
  //turn numbers into an array of numbers by using split by spaces
  //sort array from greatest to least
  //return first and last index value

  let array = numbers.split(' ')
  array.sort((a, b) => b - a)
  return `${array[0]} ${array[array.length -1]}`

}
console.log(highAndLow("1 2 9 4 5"))