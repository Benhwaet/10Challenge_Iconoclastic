// const promptUser = require('./lib/prompts.js');


const inquirer = require("inquirer");
const validateColor = require("validate-color").default;
const generateSVG = require('./lib/generateSVG.js');
const { writeFile } = require('fs');


//function to prompt user for answers
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "shape",
            message: "Which shape would you like to use?",
            choices: ["Triangle", "Square", "Circle"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color, by name or hex code, would you like the shape to be?",
            
            validate: function (answer) {
                if (validateColor(answer)) {
                    return true;
                }
                else  {
                    return "Please enter a valid color.";
                }
            }
        },
        {
            type: "input",
            name: "text",
            message: "Which three characters would you like to see in the final image?",

            validate: function (answer) {
                if (answer.length < 3) {
                    return "Please enter three characters.";
                }
                else if (answer.length > 3) {
                    return "Please enter three characters.";
                }
                else if (answer.length === 3) {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "textColor",
            message: "What color, by name or hex code, would you like the text to be?",

            validate: function (answer) {
                if (validateColor(answer)) {
                    return true;
                }
                else  {
                    return "Please enter a valid color.";
                }
            }
        }
    ]);
};
// function to generate SVG markup
const init = () => {
    promptUser()
        .then((answers) => writeFile('./examples/logo.svg', generateSVG(answers)))
        .then(() => console.log('Success!'))
        .catch((err) => console.log(err))          
    };

//call to initialize app
init();