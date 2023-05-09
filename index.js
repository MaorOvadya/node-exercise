const sum = require("./mySum");

console.log(sum.mySum(5, 5));

const firstArr = [1, 2, 3, 4, 5];

const secondArr = firstArr.map((arr) => arr * 2);
console.log(secondArr);

const resultArr = sum.mySum(...firstArr);
console.log(resultArr);

const average =
  secondArr.reduce((sum, crr) => {
    return sum + crr;
  }, 0) / secondArr.length;

const averageMoreThenValue = secondArr.filter((value) => {
  if (value > average) {
    console.log(value);
    return true;
  }
});

console.log(averageMoreThenValue);

setTimeout(() => console.log("Goodbye"), 3000);

const employee = {
  name: "Maor",
  email: "Maor@george.com",
  department: "developer",
  startDate: "2022-01-21",
};

const { name, email } = employee;
const worker = { name, email };

console.log(worker);
