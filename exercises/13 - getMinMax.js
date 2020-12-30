function getMinMax(...numbers) {
  if(numbers.length < 2 || numbers.length > 7) {
    return false;
  }

  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}

let result = getMinMax(2, 1, -1, -2);

console.log(result);