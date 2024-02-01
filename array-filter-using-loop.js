// array-filter-using-loop
let numbers = [100, 50, 200, 400, 25, 60, 80];
let arrayHistory = [];
for (let i = 0; i < numbers.length; i++) {
  let currentElement = numbers[i];
  if (currentElement <= 200) {
    arrayHistory.push(currentElement);
  }
}
console.log(arrayHistory);
 |