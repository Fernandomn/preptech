/**
 * Entrevista numero 01, dia 01/15/2025
 * Você tem um método que recebe um numero flutuante. Deve armazenar esse numero e,
 * se houverem 3 números que, combinados, estejam dentro de uma certa distancia,
 * Deve imprimir essa tripla, e remover esses numeros da lista.
 *
 */
class BufferZone {
  buffer: number[];
  distance: number;

  constructor(distance: number) {
    this.distance = distance;
    this.buffer = [];
  }

  get lastIndex(): number {
    return this.buffer.length - 1;
  }

  public receiveBuffering(input: number): void {
    let index = this.insertOrdered(input);

    let triple = this.getValidTriple(index);

    if (triple.length) {
      console.log(`(${triple[0]}, ${triple[1]}, ${triple[2]})`);
    }
  }

  private insertOrdered(input: number): number {
    if (!this.buffer.length || input > this.buffer[this.lastIndex]) {
      this.buffer.push(input);
      return this.lastIndex;
    }
    if (input < this.buffer[0]) {
      this.buffer.unshift(input);
      return 0;
    }

    let start: number = 0,
      end: number = this.lastIndex;

    while (start < end) {
      let mid = Math.floor((start + end) / 2);

      if (input < this.buffer[mid]) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    let newIndex = start;
    this.buffer.splice(newIndex, 0, input);
    return newIndex;
  }

  private getValidTriple(index: number): number[] {
    const window = 3;
    const start = Math.max(0, index - window + 1);
    const end = Math.min(index + window, this.buffer.length);

    for (let i = start; i < end; i++) {
      const first = this.buffer[i];
      const last = this.buffer[i + window - 1];

      if (Math.abs(last - first) <= this.distance) {
        const result = this.buffer.slice(i, i + window);
        this.buffer.splice(i, window);
        return result;
      }
    }
    return [];
  }
}

// Testing buffer zone

let distance = 200;

const inputArray = [
  -41, -1624, 7785, -3098, -5961, -2433, 523, -6898, -3476, 2216, -9730, 7227,
  5337, -4515, 3136, -7237, -606, -253, -4213, 3968, -5984, 6646, 7988, 8261,
  9982, -3767, -656, -2956, -6252, 4563, 1587, -6461, 8033, -32, -6547, -9381,
  8485, -7411, 972, 1467, 5254, -9015, -4102, -7968, -3931, 3966, 3499, 438,
  -4148, -6490, -2332, -4593, 7411, -3726, 380, -5887, -132, -5797, -2709,
  -4156, -9047, -3347, 5221, -5455, -1723, -8715, -7364, 3636, -1061, 7029,
  -6822, 4981, -3270, 4457, 1940, -2571, 4202, 433, -3199, -1463, 184, 1841,
  3371, -9935, -7196, -2289, -3921, -1797, -7811, -2728, 8403, 7229, 7990,
  -1787, -2572, 903, 7572, 3747, -7677, 4576, -3632, -7564, -9361, -9798, -4602,
  -1466, 8849, 5262, -9079, -9017, -9115, 2441, 56, 8819, -5068, -669, 2733,
  1037, 1810, -542, -9437, -668, -1559, -8589, 2634, 2954, 612, -3710, 4309,
  8387, 1229, 7049, 9491, -2544, -1029, 2060, 9336, -6622, -4370, -2283, -7065,
  -7163, 2009, 9919, -1847, 7604, 1933, -5889, 1051, 9800, 7887, -6922, 3237,
  6267, 3794, -1347, 2763, -5028, 9707, 7666, -8885, -6522, -3880, 3933, 1298,
  8914, 8224, 6524, -781, -439, -6934, -1400, -8548, -4601, 3057, -9676, -8224,
  -9903, 1655, 805, -8161, 3977, 1322, -3740, 8326, -3927, 9374, -6531, 1690,
  1574, 8943, 9044, -2636, 4011, -3987, -8982, -4094, 4562, -7725, -6564,
];

const inputArray2 = [-452, -97, -180, -484, 224, 393, -277, -470, 385, 401];
const inputArray3 = [-2, -129, -125, -51, 118, 80, 108, -87, 248, -234];

let bz = new BufferZone(distance);
console.log('input 1');
for (let input of inputArray) {
  bz.receiveBuffering(input);
}
console.log();
console.log('input 2');
for (let input of inputArray2) {
  bz.receiveBuffering(input);
}
console.log();

console.log('input 3');
for (let input of inputArray3) {
  bz.receiveBuffering(input);
}
console.log();

console.log(`end`);
