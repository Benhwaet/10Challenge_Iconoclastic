const promptUser = require('./lib/prompts.js');
const generateSVG = require('./lib/generateSVG.js');
const { writeFile } = require('fs');


// function to generate SVG markup
const init = () => {
        const answers = promptUser()
        // to avoid a callback error, looked up solution on bobbyhadz.com, 
        //can be written otherwise, will try this first
        .then((answers) => {
            const svg = generateSVG(answers.shapeColor, answers.text, answers.textColor);
            writeFile("./example/logo.svg", svg, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfully wrote to index.html");
                }
            });
        });

    };



//call to initialize app
init();