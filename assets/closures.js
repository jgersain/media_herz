// Inmediately invoked function expresions (IIFE)
// why? data privacity
(function () {
  let color = 'green';

  function printGreenColor() {
    console.log(color);
  }

  printGreenColor();
})();

// functions returning functions
function makeColorPrinter(color) {
  let colorMessage = `The color is ${color}`;

  return function () {
    console.log(colorMessage);
  };
}

let greenColorPrinter = makeColorPrinter('blue');
greenColorPrinter();

// Closure -> variables privadas

// public value count
const counter = {
  count: 3,
};

console.log(counter.count);

// private value count

function makeCounter(n) {
  let count = n;

  return {
    increase: function () {
      return count++;
    },
    decrease: function () {
      return count--;
    },
    getCount: function () {
      return count;
    },
  };
}

let counter2 = makeCounter(10);
console.log(`Counter is ${counter2.getCount()}`);

counter2.increase();
counter2.increase();
counter2.increase();
console.log(
  `Counter has been increased three times, and now is ${counter2.getCount()}`
);

counter2.decrease();
console.log(`Counter has been decreased by one, now is ${counter2.getCount()}`);
