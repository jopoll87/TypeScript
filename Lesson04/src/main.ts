//Type Aliases
//! This cannot be done with an interface

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name?: string,
  active: boolean,
  albums: stringOrNumberArray,
}
// Literal Types

let myName: 'Dave';

let userName: 'Dave' | 'Jon' | 'Amy'

userName = 'Amy';

// Functions

const add = (a: number, b: number): number => {
  return a + b
}

const logMsg = (message: any): void => {
  console.log(message)
}

logMsg('Hello');
logMsg(add(2,3));


let subtract = function (c: number, d: number): number {
  return c - d
}

function divide(e: number, f: number): number {
  return e / f;
}

// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined'){
    return a + b + c;
  }
  return a + b;
}
const sumAll = (a: number, b: number, c: number = 2): number => {
  
  return a + b + c
}



logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(3,4))

// Rest Parameters 

const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2,3,4,5));

const createError = (errMsg: string) => {
  throw new Error(errMsg);
}

const infinite = () => {
let i: number = 1
while (true) {
  i++
  if (i > 100) break
}}

// custome type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false
}


//  use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string'
  if (isNumber(value)) return 'number'
  return createError('This should never happen')
}
