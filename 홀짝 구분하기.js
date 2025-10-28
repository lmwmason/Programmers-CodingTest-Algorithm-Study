const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

inputNum = Number(input);

if (inputNum%2===0)
    console.log(inputNum, 'is even');
else
    console.log(inputNum, 'is odd');
