const Shapes = require('./shapes.js');

class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg id="square" viewbox="0 0 600 400" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" Y="10" width="300" height="200" fill="${this.shapeColor}"></rect>
            <text x="150" y="200" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
}
}

module.exports = Square;
