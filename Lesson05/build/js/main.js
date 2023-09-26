"use strict";
// Type Assertions
// convert to more or less specific
let a = 'hello';
let b = a; //less specific
let c = a; // more specific
// cannot be used in .tsx files
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 3, 'concat');
// Be careful because TS sees no problem - but a string is returned 
let nextVal = addOrConcat(2, 3, 'concat');
// The DOM
const img = document.getElementById('img');
const myImg = document.querySelector('img');
const nextImg = document.getElementById('myImg');
img.src;
myImg.src;
nextImg.src;
