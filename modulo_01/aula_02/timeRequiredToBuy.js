/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  // const fila = [];
  let time = 0;
  let qnt = tickets[k];

  for (let i = 0; i < tickets.length; i++) {
    if (i < k) {
      if (tickets[i] > qnt) {
        time += qnt;
      } else {
        time += tickets[i];
      }
    } else if (i > k) {
      if (tickets[i] >= qnt) {
        time += qnt - 1;
      } else {
        time += tickets[i];
      }
    } else {
      time += qnt;
    }
  }

  return time;
};
