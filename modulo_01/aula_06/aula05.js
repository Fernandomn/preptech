const fatorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
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

