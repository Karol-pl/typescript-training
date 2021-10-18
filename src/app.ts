// const userName = "Max";

// let age = 30;

// age = 20;

// const add = (a: number, b: number) => a + b;

// console.log(add(2, 5));

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// printOutput(add(5, 2));

const hobbies = ["sports", "cooking"];

const activeHobbies = ["hiking"];

activeHobbies.push(...hobbies);

const person = {
  firstName: "max",
  age: 30,
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3, 7);

console.log(addedNumbers);

const [hobby1, hobby2] = hobbies;

const { firstName: userName, age } = person;

console.log(userName, age);
