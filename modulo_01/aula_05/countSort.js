const countSort = (array) => {
  const countMap = {};

  for (let i = 0; i < array.length; i++) {
    countMap[array[i]] = countMap[array[i]] ? countMap[array[i]]++ : 1;
  }

  let j = 0;

  for (let [key, count] of Object.entries(countMap)) {
    while (count > 0) {
      array[j] = Number(key);
      j++;
      count--;
    }
  }
};
