const promptUser = require('./lib/prompts.js');
const generateSVG = require('./lib/generateSVG.js');
const { writeFile } = require('fs');


// function to generate SVG markup
const init = async () => {
    promptUser()
    // to avoid a callback error, looked up solution on bobbyhadz.com, 
    //can be written otherwise, will try this first
        .then((answers) => writeFile('logo.svg', generateSVG(answers), err => {
            if (err) {
                console.log(err.message);
                throw err;
            }
        console.log('Successfully wrote to logo.svg');
    })
)};



//call to initialize app
init();