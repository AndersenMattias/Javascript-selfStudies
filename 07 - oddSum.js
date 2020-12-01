function oddNumbers(...numbers) {
  numbers = numbers.filter(currentNumber => currentNumber % 2 !== 0).reduce((accum, currentValue) => accum + currentValue), 0;
 
  return numbers;
}

console.log(oddNumbers(1, 2, 3, 4, 5, 6, 7));