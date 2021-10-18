"use strict";
// const userName = "Max";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// let age = 30;
// age = 20;
// const add = (a: number, b: number) => a + b;
// console.log(add(2, 5));
// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);
// printOutput(add(5, 2));
var hobbies = ["sports", "cooking"];
var activeHobbies = ["hiking"];
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    firstName: "max",
    age: 30,
};
var copiedPerson = __assign({}, person);
console.log(copiedPerson);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add(5, 10, 2, 3, 7);
console.log(addedNumbers);
var hobby1 = hobbies[0], hobby2 = hobbies[1];
var userName = person.firstName, age = person.age;
console.log(userName, age);
