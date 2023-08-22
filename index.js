const promptUser = require('./lib/prompts.js');
const generateSVG = require('./lib/generateSVG.js');
const { writeFile } = require('fs');


// function to generate SVG markup
const init = () => {
        const answers = promptUser()
        // to avoid a callback error, looked up solution on bobbyhadz.com, 
        //can be written otherwise, will try this first
        try {
            writeFile('logo.svg', generateSVG(answers))
           console.log('Successfully wrote to logo.svg');
        } catch (err) {
                console.log(err.message);
        }
    };



//call to initialize app
init();