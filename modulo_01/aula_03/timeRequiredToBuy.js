/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  // return mathSolution(tickets, k)

  return queueSolution(tickets, k)
};

const mathSolution = (tickets, k) => {
  let time = 0;
  let qnt = tickets[k];

  for (let i = 0; i < tickets.length; i++) {
      if (i < k) {
          if (tickets[i] > qnt) {
              time += qnt
          } else {
              time += tickets[i]
          }
      } else if (i > k) {
          if (tickets[i] >= qnt) {
              time += qnt - 1;
          } else {
              time += tickets[i]
          }
      } else {
          time += qnt;
      }
  }

  return time;
}
const queueSolution = (tickets, k) => {
  // NOTE: it`s failing for some cases
  let time = 0

  while (tickets.length > 0) {
      time++
      console.log("time:", time)
      // console.log("loop:", time)

      console.log("tickets:", tickets)
      let current = tickets.shift()

      current--

      if (current > 0) {
          tickets.push(current)
      }

      console.log("Updated tickets:", tickets)
  }
  return time
}
