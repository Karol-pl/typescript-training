"use strict";
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 28;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person("Karol");
user1.greet("Hi there, I'm ");
console.log(user1);
