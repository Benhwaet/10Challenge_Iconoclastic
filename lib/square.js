const Shapes = require('./shapes.js');
const Color = require('./colors.js');

class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}

module.exports = Square;
