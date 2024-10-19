// Task 1
(function life() {
  console.log(`Location of window: ${window.location.href}`);
})();

// Task 2
const numbers = [3, 23, 11, 25, 21, 44, 14, 4, 90, 19];
console.log(`Original array: ${numbers}`);
console.log(`Mapped array: ${numbers.map((num) => num * 2)}`);
console.log(`Filtered array: ${numbers.filter((num) => num >= 25)}`);
console.log(`Reduced array: ${numbers.reduce((total, num) => total + num, 0)}`);

// Task 3
function multiply(number1, number2) {
  return number1 * number2;
}
const arrayForMultiply = [2, 8];
console.log(
  `Multiply function with spread parameter: ${multiply(...arrayForMultiply)}`
);

// Task 4
const testSet = new Set([12, 8, 9, 8, 16]);
console.log(`Set without dublication:`);
for (const num of testSet) {
  console.log(num);
}

// Task 5
const user = {
  name: "Bob",

  getName() {
    console.log(`My name is ${this.name}`);
  },
};
const admin = {
  name: "Frank",
};
const adminName = user.getName.bind(admin);
adminName();

// Task 6
// function createAdvancedCounter() {
//   let count = 0;
//   const response = {
//     increment() {
//       count++;
//       console.log(`Incremented number: ${count}`);
//     },
//     decrement() {
//       count--;
//       console.log(`Decremented number: ${count}`);
//     },
//   };
//   return response;
// }
// const counter = createAdvancedCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.decrement();
// counter.increment();
// counter.decrement();
// counter.decrement();
// counter.decrement();

function createAdvancedCounter() {
  let counter = 0;
  return function createAdvancedCounterWithTwoMethods(objectOfAdvancedCounter) {
    objectOfAdvancedCounter.increment = function () {
      counter++;
      console.log(`Збільшення на один: ${counter}`);
    };

    objectOfAdvancedCounter.decrement = function () {
      counter--;
      console.log(`Зменшення на один: ${counter}`);
    };
  };
}

const objectOfAdvancedCounter = {};

createAdvancedCounter(objectOfAdvancedCounter)(objectOfAdvancedCounter);

objectOfAdvancedCounter.increment();
objectOfAdvancedCounter.decrement();
