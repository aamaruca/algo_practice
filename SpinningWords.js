function spinWords(string){
    let newString = string.split(" ").map(word => word.length >= 5 ?
      [...word].reverse().join('') : word).join(' ')
    return newString
}
spinWords("Hey fellow warriors")


function spinWords(string){
  return string.split(" ").map(word => word.length >= 5 ?
    [...word].reverse().join('') : word).join(' ')
}
spinWords("Hey fellow warriors")