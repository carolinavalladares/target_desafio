function fib(value) {
  let arr = [0, 1];

  if (value === 0) {
    return 0;
  }

  for (let i = 2; i <= value + 10; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }

  if (arr.includes(value)) {
    return "Número pertence a sequêcia...";
  } else {
    return "Número não pertence a sequência...";
  }
}

console.log(fib(8));
console.log(fib(4));
