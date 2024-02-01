// Get Miximum and Minimum Number from an Array Using Loop

let numbers = [45, 3, 33, 200, 30, 50];
let maxNum = numbers[0];
let minNum = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  let getCurrentNumber = numbers[i];
  if (maxNum < getCurrentNumber) {
    maxNum = getCurrentNumber;
  }
  if (minNum > getCurrentNumber) {
    minNum = getCurrentNumber;
  }
}
console.log(maxNum, minNum);
