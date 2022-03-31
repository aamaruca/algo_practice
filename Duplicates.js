// You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.
//Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.
//Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
// If duplicate characters are found in the same array, the first occurance should be kept.

const removeDuplicateIds = (obj) => {
  //sort keys into numerical order
  //compare and remove duplicates in every array (using loop)
  //compare each array

  let valsArray = Object.entries(obj);
  let finalObj = {};
  let uniqueArr = valsArray.map(([key, value]) => [key, [...new Set(value)]]);
  // return uniqueArr[uniqueArr.length - 1][1];
  let holderArray = [...uniqueArr[uniqueArr.length - 1][1]];

  for (let i = uniqueArr.length - 2; i >= 0; i--) {
    let tempArr = uniqueArr[i][1];

    for (let j = 0; j < uniqueArr[i][1].length; j++) {
      if (holderArray.includes(uniqueArr[i][1][j])) {
        tempArr.splice(j, 1);
      }
    }
    uniqueArr[i][1] = tempArr;
    holderArray.push(...tempArr);
  }
  console.log(uniqueArr)
  for (const key of uniqueArr) {
    finalObj[key[0]] = key[1];
  }
  // return finalObj;
};

//  output "11": ["P", "R", "S"],
//         "53": ["C"],
//         "236": ["L", "X", "G", "H"],
//         "432": ["A", "B", "D"],
console.log(
  removeDuplicateIds({
  //   432: ["A", "A", "B", "D"],
  //   53: ["L", "G", "B", "C"],
  //   236: ["L", "A", "X", "G", "H", "X"],
  //   11: ["P", "R", "S", "D"],
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"]
  })
);
