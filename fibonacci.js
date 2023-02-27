function fibonacci(n) {
  let fib = [0, 1];

  while (fib[fib.length - 1] < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  if (fib.includes(n)) {
    return `O número ${n} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${n} não pertence à sequência de Fibonacci.`;
  }
}

console.log(fibonacci(21));
console.log(fibonacci(22)); 
