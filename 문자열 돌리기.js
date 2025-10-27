const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

const n = input.length;

for(let i=0; i<n; i++)
    console.log(input[i]);
