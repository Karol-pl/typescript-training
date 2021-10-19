"use strict";
// type AddFn = (a: number, b: number) => number;
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 28;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi!");
        }
    };
    return Person;
}());
var user1;
user1 = new Person("Karol");
user1.greet("Hi there, I'm ");
console.log(user1);
