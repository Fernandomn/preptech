/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    const pilha = [];

    for (let symbol of s) {
        if (pilha[pilha.length - 1] === symbol) {
            pilha.pop()
        } else {
            pilha.push(symbol)
        }
    }
    return pilha.join('')
};