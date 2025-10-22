const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
inputSliced = input.split(' ');

console.log("a =", inputSliced[0]);
console.log("b =",inputSliced[1]);