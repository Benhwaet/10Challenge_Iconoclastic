const Shapes = require('./shapes.js');
const Color = require('./color.js');

class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}