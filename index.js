const promptUser = require('./lib/prompts.js');
const generateSVG = require('./lib/generateSVG.js');
const { writeFile } = require('fs');

// function to generate SVG markup
const init = () => {
    promptUser()
    .then ((answers) => writeFile('logo.svg', generateSVG(answers)))
    .then(() => console.log('Successfully wrote to logo.svg'))
    .catch((err) => console.error(err));
    };
    
    //call to initialize app
    init();