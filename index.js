//packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const generateSVG = require("./assets/utils/generateSVG.js");

//function to prompt user for answers
const promptUser = () => {
    return inquirer.prompt([
        {
        type: "input",
        name: "characters",
        message: "Which three characters would you like to see in the final image?",

        validate: function (answer) {
            if (answer.length < 3) {
                return "Please enter three characters.";
            } else if (answer.length > 3) {
                return "Please enter three characters.";
            } else if (answer.length === 3) {
            return true;
            }
        }
        },
        {
        type: "input",
        name: "text-color",
        message: "What color would you like the text to be?"
        },
        {
        type: "list",
        name: "shape",
        message: "Which shape would you like to use?",
        choices: ["Triangle", "Square", "Circle"]
        },
        {
        type: "input",
        name: "color",
        message: "What color, by name or hexadecimal, would you like the shape to be?"
        }
    ]);
};

// function to generate SVG markup
const init = () => {
promptUser()
.then ((answers) => writeFile('logo.svg', generateSVG(answers)))
.then(() => console.log('Successfully wrote to logo.svg'))
.catch((err) => console.error(err));
};

//call to initialize app
init();