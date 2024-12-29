const hanoi = (n, source, aux, target) => {
  if (n >= 1) {
    hanoi(n - 1, source, target, aux);
    console.log(`move ${n} from ${source} to ${target}`);
    hanoi(n - 1, aux, source, target);
  }
};
