function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString('hello'));

function forLoop(string) {
  let reversedString = "";
  for(let i = string.length; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

console.log(forLoop('hello'));

function charAt(string) {
  let newString = "";
  for (let i = string.length; i >= 0; i--) {
    newString += string.charAt(i);
  }
  console.log(newString);
}
