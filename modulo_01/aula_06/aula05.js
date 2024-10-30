const fatorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
};

const fibonacci = (n) => {
  if (n === 1 || n === 0) {
    return n;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
};

const fib = (n) => {
  if (n < 2) {
    return n;
  }
  let n0 = 0;
  let n1 = 1;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    current = n0 + n1;
    n0 = n1;
    n1 = current;
  }
  return current;
};

const hanoi = (n, source, aux, target) => {
  if (n >= 1) {
    hanoi(n - 1, source, target, aux);
    console.log(`move ${n} from ${source} to ${target}`);
    hanoi(n - 1, aux, source, target);
  }
};

console.log(fatorial(5));
console.log(fibonacci(20));
console.log(fib(20));
console.log(hanoi(5, 'a', 'b', 'c'));

