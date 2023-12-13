'use strict';
// for in and for of loops for arrays and objects
const numbers = [7, 10, 1, 5, 2];
numbers.field2 = 'Value2';
numbers[-10] = 'Value3';
numbers.field1 = 'Value1';
numbers[5] = 20;
// console.log(numbers);

// for (const i in numbers) {
//   const value = numbers[i];
//   console.log(i, typeof i, value);
// }

for (const i of numbers) {
  const value = numbers[i];
  console.log(i, typeof i, value);
}
/*
// function declaration
// prototype constructor
function Point(x,y) {
  this.x = x;
  this.y = y;
}
// constructor static method .from
Point.from = function(obj) {
  const {x, y} = obj; //destructive assignment
  return new Point(x, y);
};

Point.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
};

Point.prototype.toString = function() {
  return `[${this.x}, ${this.y}]`;
};

console.log('function prototype:', (function() {}).prototype);
console.log('lambda prototype:', (() => {}).prototype);

console.log('Point prototype:', Point.prototype);
console.log('move prototype:', Point.prototype.move.prototype);

const p1 = new Point(10, 20);
p1.move(-5, 10);

console.log(p1);
console.log(p1.toString());
console.log(p1 + '');
*/

//simplier code version using classes
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  toString() {
    return `[${this.x}, ${this.y}]`;
  }

  static from(obj) {
    const {x, y} = obj;
    return new Point(x, y);
  }
}
const p1 = new Point(10, 20);
p1.move(-5, 10);

console.log(p1);
console.log(p1.toString());
console.log(p1 + '');
/*
const logger = level => {
  const color = logger.colors[level] || logger.colors.info;
  return s => {
    const date = new Date().toISOString();
    console.log(color + date + '\t' + s);
  };
}; //в конце стрелочных функций ставится точка с запятой
//object literal
//SQL sequence
logger.colors = {
  warning: '11111',
  error: '22222',
  info: '33333',
};

const warning = logger('warning');
const error = logger('error');
const debug = logger('debug');
const slow = logger('slow');

slow('I am slow logger');
warning('Hello');
error('World');
debug('Bye');
*/
function Logger(level) {
  this.color = Logger.colors[level] || Logger.colors.info;
}

Logger.colors = {
  warning: '11111',
  error: '22222',
  info: '33333',
};

Logger.prototype.log = function(s) {
  const date = new Date().toISOString();
  console.log(this.color + date + '\t' + s);
};

const warning = new Logger('warning');
const error = new Logger('error');
const debug = new Logger('debug');
const slow = new Logger('slow');

slow.log('I am slow logger');
warning.log('Hello');
error.log('World');
debug.log('Bye');
/*
//inheritance
const util = require('util');
//prototype constructor Rect
function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rect.prototype.toString = function() {
  return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
};

function Square(x, y, side) {
  Rect.call(this, x, y, side, side);
}
// node.js function
//util.inherits(Square, Rect);
// Square.prototype = Object.create(Rect.prototype);
// Square.prototype.constructor = Square;

Object.setPrototypeOf(Square.prototype, Rect.prototype);

const res = new Square(10, 20, 50);
console.log(res.toString());
*/
class Rect {
  constructor(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set side(l) {
    this.width = l;
    this.height = l;
  }

  get side() {
    if (this.width !== this.height) throw new Error('not a Square');
  }
}

const p2 = new Rect(10, 20, 50, 100);
console.log(p2.area);
// p2.side = 150;
console.log(p2.side);
console.log(p2.area);

