class Trie {
  root = {};
  wordRegister = new Set();

  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current[char]) {
        current[char] = {};
      }
      current = current[char];
    }
    this.wordRegister.add(word);
  }

  search(word) {
    return this.wordRegister.has(word);
  }

  startsWith(prefix) {
    let current = this.root;

    for (let char of prefix) {
      if (current[char]) {
        current = current[char];
      } else return false;
    }
    return true;
  }
}
