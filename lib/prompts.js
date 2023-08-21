//packages needed for this application
const inquirer = require("inquirer");
const colors = require("./colors.js");



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
            name: "shape-color",
            message: "What color, by name or hexadecimal, would you like the shape to be?",
            validate: function (answer) {
                if (answer.length === 0) {
                    return "Please enter a color";
                }
                if (answer !== colors) {
                    return "Please enter a valid color.";
                }
                else if (answer === colors) {
                    return true;
                }
                else if (answer.length === 7 && answer.includes("#")) {
                    return true;
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
            name: "text-color",
            message: "What color, by name or hexadecimal, would you like the text to be?",

            validate: function (answer) {
                if (answer.length === 0) {
                    return "Please enter a color";
                }
                if (answer !== color) {
                    return "Please enter a valid color.";
                }
                else if (answer === color) {
                    return true;
                }
                else if (answer.length === 7 && answer.includes("#")) {
                    return true;
                }
            }
        }
    ]);
};

//exporting promptUser function
module.exports = promptUser;
