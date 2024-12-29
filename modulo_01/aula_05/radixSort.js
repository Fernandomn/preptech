const getDigits = (number) => {
  const digits = [];
  while (number > 0) {
    digits.push(number % 10);
    number = Math.floor(number / 10);
  }
  return digits;
};

const radixSort = (array) => {
  let digitsArray = array.map((value) => getDigits(value));

  let maxDigits = digitsArray.reduce(
    (acc, cur) => Math.max(acc, cur.length),
    0
  );
  for (let i = 0; i < maxDigits; i++) {
    digitsArray.sort((a, b) => a[i] - b[i]);
  }

  return digitsArray.map((digits) => Number(digits.reverse().join('')));
};
