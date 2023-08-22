const Shapes = require('./shapes.js');

class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        `<svg id="square" viewbox="0 0 600 400" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" Y="10" width="300" height="200" fill="#EACF44"></rect>
            <text x="150" y="200" font-size="60" text-anchor="middle" fill="${shapeColor}">${text}</text>
        </svg>`
    
        return Square.render();
}
}

module.exports = Square;
