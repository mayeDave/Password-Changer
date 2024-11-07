const fs = require('fs');

// const data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log('Program Ended');

fs.readFile('input.txt', (error, data) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log(data.toString());
});

console.log('Program Ended');