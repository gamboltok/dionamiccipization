"use strict";

const count = 111;


// console.log(isNaN(count));


const fontSize = 26 + 'px';

console.log(typeof(fontSize));

//Number
console.log(typeof(+fontSize)); // unarnii plus

console.log(typeof(parseInt("15", 10)));

// to bolean
// "", 0, null, undefind, NaN" == FALSE
let switcher = null;

switcher = 1;

if(switcher){
    console.log("working");
}

const url = "http://www.";
console.log(typeof(!!url));

console.log([] + 1 + 2);
