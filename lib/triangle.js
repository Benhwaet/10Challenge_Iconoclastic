const Shapes = require('./shapes.js');
const Color = require('./colors.js');

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}

module.exports = Triangle;


