const shape = require("../..assets/library/shapes");
const answers = require("../../index");

const generateSVG = (answers) => {
    const { characters, textColour, shape, shapeColour } = answers;
//using gitpilot for assistance, but will need to change the code to fit my project
    if (shape === "Triangle") {
    return `
    <svg id="triangle" viewBox="0 0 600 400" width="300" height="200">
        	<polygon points="150 15, 300 200, 0 200" fill="${shapeColour}"/>
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColour}">${characters}</text>
      </svg>`;
    } else if (shape === "Square") {
        return `<svg id="square" viewbox="0 0 600 400" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" Y="10" width="300" height="200" fill="#EACF44"></rect>
        <text x="150" y="200" font-size="60" text-anchor="middle" fill="${shapeColour}">${characters}</text>
    </svg>`;
    } else if (shape === "Circle") {
        return `<svg id="circle" viewBox="0 0 600 400" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle r="150" cx="300" cy="200" fill="${shapeColour}"/>
        <text x="300" y="225" font-size="60" text-anchor="middle" fill="${textColour}">${characters}</text>
    </svg>`
    };
};

module.exports = generateSVG;