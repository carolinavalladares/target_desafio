function invert(string) {
  let stringArr = Array.from(string);

  let inverted = [];

  for (let i = 0; i < stringArr.length; i++) {
    inverted.unshift(stringArr[i]);
  }

  return inverted.join("");
}

console.log(invert("hello, world!"));
