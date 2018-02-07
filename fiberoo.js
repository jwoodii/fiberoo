function fib() {
  let current = 0;
  let next = 1;
  const list = [];
  for (let i = 0; i < 100; i++) {
    list.push(current);
    const temp = current;
    current = next;
    next += temp;
  }
  return list;
}

function numsToString(array) {
  return _.map(array, function (num) {
    return `${num}`;
  });
}

function numEvenNums(array) {
  return _.filter(array, function (num) {
    return num % 2 === 0;
  }).length;
}

console.log(fib());
console.log(numsToString(fib()));
console.log(numEvenNums(fib()));
