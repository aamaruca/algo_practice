// The Situation
// In my bathroom, there is a pile of n towels. A towel either has the color red or blue. We will represent the pile as sequence of red and blue.The leftmost towel is at the bottom of the pile, the rightmost towel is at the top of the pile.

// As the week goes by, I use t towels. Whenever I grab a new one it's always the towel at the top of the pile. All used towels are placed in a basket.

// At the end of the week, I wash all used towels in the basket and put them on top of the existing pile again. But my favorite color is blue, so I want to use blue towels as often as possible. Therefore, when the washed towels are placed on the pile again, the blue towels are always on top of the red towels.

// An Example
// If there are n=5 towels, a pile may be:blue, red, blue, red, blue

// If I grab t=3 towels during the week, this will be the remaining pile at the end of the week: blue, red

// The basket will contain the following towels: blue, red, blue

// After I sorted the washed towels and put them on the pile according to the rule described above, the resulting pile is:blue, red, red, blue, blue

// Your Task: Sort the Pile
// You are given an initial pile of towels as a sequence of the strings "red" and "blue". On top of that, you receive a sequence of non-negative integers. The first integer describes the number of used towels t in the first week, the second integer describes the number of used towels t in the second week and so forth.

// My question is: How will my pile of towels look like in the end, if I use t towels every week and place them on top of the the pile according to the rule defined above?

// Notes
// It is ensured that 0 <= t <= n

function sortThePile(pileOfTowels, weeklyUsedTowels) {
  // loop through each weeklyUsed Towel
  // start loop to pop off towels
  // let basket container to hold dirty towels
  // find the number of towels at first index weeklyUsedTowels[]
  // pop off that many towels from pileOfTowels
  // sort dirty towels in descending order and push onto basket
  // spread basket towels onto pileofTowels
  // end loop to pop of towels
  // end loop through each weeklyUsed Towel
  // return pile of towels

  for (let i = 0; i < weeklyUsedTowels.length; i++) {
    let basket = [];
    for (let j = 0; j < weeklyUsedTowels[i]; j++) {
      basket.push(pileOfTowels.pop());
    }
    basket.sort().reverse();

    pileOfTowels = [...pileOfTowels, ...basket];
  }

  return pileOfTowels;
}

console.log(sortThePile(["blue", "red", "blue", "red", "blue"], [2, 1, 4, 2]));
// describe("Sample tests", () => {
//   it("Example #1", () => {
//     const pileOfTowels = ["blue", "red", "blue", "red", "blue"];
//     const weeklyUsedTowels = [3];
//     const expected = ["blue", "red", "red", "blue", "blue"];
//     assert.deepEqual(sortThePile(pileOfTowels, weeklyUsedTowels), expected);
//   });

//   it("Example #2", () => {
//     const pileOfTowels = ["blue", "red", "blue", "red", "blue"];
//     const weeklyUsedTowels = [2, 1, 4, 2];
//     const expected = ["blue", "red", "red", "blue", "blue"];
//     assert.deepEqual(sortThePile(pileOfTowels, weeklyUsedTowels), expected);
//   });
// });

function sortThePile(pileOfTowels, weeklyUsedTowels) {
  let basket = []
  weeklyUsedTowels.map((num, i) => (
    pileOfTowels.reduce((pile, towel) => {
      basket.push(pileOfTowels.pop())
      basket.sort().reverse()
    })
  ))
  return pileOfTowels
}
console.log(sortThePile(["blue", "red", "blue", "red", "blue"], [2, 1, 4, 2]));