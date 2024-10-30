function sortVowels(s) {
  const indexList = [];
  const vowelStack = [];
  let splittedString = s.split('');

  for (let i = 0; i < s.length; i++) {
    if (isVowel(s[i])) {
      indexList.push(i);
      vowelStack.push(s[i]);
    }
  }

  vowelStack.sort(vowelSort);

  for (let j = 0; j < splittedString.length; j++) {
    if (isVowel(splittedString[j])) {
      splittedString[j] = vowelStack.pop();
    }
  }
  return splittedString.join('');
}

const isVowel = (character) => {
  return (
    ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].indexOf(character) >= 0
  );
};

const vowelSort = (a, b) => {
  return a < b ? 1 : a > b ? -1 : 0;
};
