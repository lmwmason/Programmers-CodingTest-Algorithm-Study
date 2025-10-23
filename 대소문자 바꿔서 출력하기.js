const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

const changedStr = input.map(
    char =>
    {
        if (char === char.toUpperCase())
            return char.toLowerCase();
        else
            return char.toUpperCase();
    }
)

console.log(changedStr.join(''));