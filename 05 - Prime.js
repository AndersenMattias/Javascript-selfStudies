function primtal(number) {
  if(number < 2) {
    return false;
  }
  for(let i = 2; i < number; i++) {
    if(number % i === 0) {
      return false;
    }
  }
  return true;
}

for(let i = 1; i <= 100; i++) {
  if(primtal(i)) {
    console.log(i);
  }
}