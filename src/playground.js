// const words = ['mystery', 'brother', 'aviator', 'crocodilesss', 'pearl', 'orchard', 'crackpot'];
// //  function findLongestWord() {
// let longestWord = 0;
// // for loop
// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > longestWord) {
//     longestWord = words[i].length;
//     winner = longestWord.values;
//   }
// }
// console.log(winner);
//    return longestWord;
//  }
//  findLongestWord();

///////////////

//  function findLongestWord(array) {
//    let maxLength = 0;
//    let word = '';
//    for (let i = 0; i < array.length; i++) {
//      if (array[i].length > maxLength) {
//        maxLength = array[i].length;
//        word = array[i];
//      }
//      console.log('${word} ${length}');
//    }
//    const myWord = {
//      word: word,
//      length: maxLength
//    };

//   return myWord;
// }

// const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(array) {
  let suma = 0;
  for (let i = 0; i < numbers.length; i++) {
    suma = suma += array[i];
  }
  return suma;
}
console.log(sumNumbers(numbers));

// const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
// function sum(key) {
//   return this.reduce((a, b) => a + (b[key] || 0), 0);
// }

// console.log(mixedArr.sum(''));
