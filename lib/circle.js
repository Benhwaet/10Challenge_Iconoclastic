const Shapes = require('./shapes.js');
const color = require('./colors.js');

class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}

module.exports = Circle;