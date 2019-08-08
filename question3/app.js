const fs = require('fs');

fs.readFile('./myWords.txt', 'utf-8', (error, data) => {
    if(error) throw new Error(error);

    console.log(data);
});