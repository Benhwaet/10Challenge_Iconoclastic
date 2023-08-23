
const Circle = require("../lib/shapes/circle.js");
const Square = require("../lib/shapes/square.js");
const Triangle = require("../lib/shapes/triangle.js");
const answers = require("../index.js");

const generateSVG = (answers) => {

    if (answers.shape === "Circle") {
        const circle = new Circle(this.text, this.textColor, this.shapeColor);
        return circle.render();
    } 
    else if (answers.shape === "Square") {
        const square = new Square(this.text, this.textColor, this.shapeColor);
        return square.render();
    } 
    else if (answers.shape === "Triangle") {
        const triangle = new Triangle(this.text, this.textColor, this.shapeColor);
        return triangle.render();
    }
};

module.exports = generateSVG;