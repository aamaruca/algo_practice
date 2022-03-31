// function solution(X, Y, A) {
//   var N = A.length;
//   var result = -1;
//   var nX = 0;
//   var nY = 0;
//   for (var i = 0; i < N; i++) {
//       if (A[i] === X)
//           nX += 1;
//       else if (A[i] === Y)
//           nY += 1;
//       if (nX == nY)
//           result = i;
//   }
//   return result;
// }

// console.log(solution(100, 63, [100, 63, 10, 6, 2, 13]))
// console.log(solution(6, 13, [13, 13,1,6]))

// function solution(N) {
//   let array = []
//   if (N === 1) {
//     return [0]
//   }
//   if (N % 2 !== 0) {
//     array.push(0)
//   }
//   for (let i = 1; i <= N / 2; i++) {
//     array.push(i, i * -1)
//   }
//   return array
// }
// console.log(solution(5))

