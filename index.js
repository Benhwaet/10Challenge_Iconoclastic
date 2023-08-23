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
            choices: ["Circle", "Square", "Triangle"]
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
        },
        {
            type: "input",
            name: "fileName",
            message: "What would you like to call your SVG logo?"
        }
    ]);
};

// function to generate SVG markup
const init = () => {
    promptUser()
        .then((answers) => writeFile(`./examples/${answers.fileName}.svg`, generateSVG(answers), (err) => 
        err ? console.log(err) : console.log ("Success!")))        
    };

//call to initialize app
init();