import emojipedia from "./emojipedia";

// var numbers = [3, 56, 2, 48, 5];

// //? Map - Create a new array by doubling each item in the numbers array.
// var doubledNumbers = numbers.map(function (x) {
//   return x * 2;
// });
// console.log("Doubled Numbers:", doubledNumbers);
// //! Expected Output: Doubled Numbers: [6, 112, 4, 96, 10]

// //? Filter - Create a new array by keeping only the numbers greater than 10.
// var numbersGreaterThan10 = numbers.filter(function (num) {
//   return num > 10;
// });
// console.log("Numbers Greater Than 10:", numbersGreaterThan10);
// //! Expected Output: Numbers Greater Than 10: [56, 48]

// //? Reduce - Accumulate the sum of all items in the numbers array.
// var sum = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// }, 0);
// console.log("Sum of Numbers:", sum);
// //! Expected Output: Sum of Numbers: 114

// //? Find - Find the first number greater than 10 in the numbers array.
// var firstNumberGreaterThan10 = numbers.find(function (num) {
//   return num > 10;
// });
// console.log("First Number Greater Than 10:", firstNumberGreaterThan10);
// //! Expected Output: First Number Greater Than 10: 56

// //? FindIndex - Find the index of the first number greater than 10 in the numbers array.
// var indexFirstNumberGreaterThan10 = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log("Index of First Number Greater Than 10:", indexFirstNumberGreaterThan10);
// //! Expected Output: Index of First Number Greater Than 10: 1

// console.log(emojipedia);

const newArr = emojipedia.map(function (emojiEntery) {
  return emojiEntery.meaning.substring(0, 100);
});

console.log(newArr);
