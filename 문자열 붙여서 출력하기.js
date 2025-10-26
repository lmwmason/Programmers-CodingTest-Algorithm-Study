const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

process.stdout.write(input[0]);
process.stdout.write(input[1]);
