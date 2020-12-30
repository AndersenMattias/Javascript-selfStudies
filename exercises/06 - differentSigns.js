function differentSign(a, b) {
  return ( ( a < 0 && b >= 0) || ( a < 0 && b >= 0) );
}

console.log(differentSign(-3,4));
console.log(differentSign(2,5));
console.log(differentSign(6,5));
console.log(differentSign(5,5));
