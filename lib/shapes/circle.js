const Shapes = require('./shapes.js');


class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg id="circle" viewBox="0 0 600 400" width="300" height="200">
            <circle cx="150" cy="150" r="100" fill="${this.shapeColor}"/>
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
}
};


module.exports = Circle;