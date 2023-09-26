"use strict";
let stringArray = ['one', 'hey', 'Jon'];
let guitars = ['Strat', 'Les paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArray[0] = 'Billy';
stringArray.push('Jimmy');
guitars.unshift('Jimmy');
guitars.push(42);
guitars.push(stringArray[2]);
//Objects
let myObject = {
    name: 'Jon',
    age: 36,
    married: true,
};
myObject.name = 'Jessica';
console.log(myObject.name);
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812'],
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    var _a;
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase}!`;
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
