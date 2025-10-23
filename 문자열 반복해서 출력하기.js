const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const inputSliced = input.split(' ');

const num = Number(inputSliced[1]);
for(let i=0; i<num; i++)
{
    process.stdout.write(inputSliced[0]);
}