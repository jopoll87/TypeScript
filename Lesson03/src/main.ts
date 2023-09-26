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
}

myObject.name = 'Jessica';

console.log(myObject.name);

type Guitarist = {
  name?: string,
  active: boolean, //? makes the property optional. 
  albums: (string | number)[], 
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812'],
}

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name?.toUpperCase}!`
}


console.log(greetGuitarist(jp))

// Enums

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);