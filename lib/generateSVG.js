
const Circle = require("../lib/shapes/circle.js");
const Square = require("../lib/shapes/square.js");
const Triangle = require("../lib/shapes/triangle.js");
const answers = require("../index.js");

const generateSVG = (shapeColor, text, textColor) => {

    if (answers.shape === "Circle") {
        const circle = new Circle(text, textColor, shapeColor);
        return circle.render();
    } else if (answers.shape === "Square") {
        const square = new Square(text, textColor, shapeColor);
        return square.render();
    } else if (answers.shape === "Triangle") {
        const triangle = new Triangle(text, textColor, shapeColor);
        return triangle.render();
    }
};

module.exports = generateSVG;