const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

inputO = Number(input[0]);
inputT = Number(input[1]);

console.log(inputO, '+', inputT, '=', inputO+inputT);
