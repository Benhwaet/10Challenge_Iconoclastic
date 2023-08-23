
const Circle = require("../lib/shapes/circle.js");
const Square = require("../lib/shapes/square.js");
const Triangle = require("../lib/shapes/triangle.js");

const generateSVG = (answers) => {

    if (answers.shape === "Circle") {
        const circle = new Circle(answers.text, answers.textColor, answers.shapeColor);
        return circle.render();
    } 
    else if (answers.shape === "Square") {
        const square = new Square(answers.text, answers.textColor, answers.shapeColor);
        return square.render();
    } 
    else if (answers.shape === "Triangle") {
        const triangle = new Triangle(answers.text, answers.textColor, answers.shapeColor);
        return triangle.render();
    }
};

module.exports = generateSVG;