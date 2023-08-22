const Shapes = require('./shapes.js');

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        `<svg id="triangle" viewBox="0 0 600 400" width="300" height="200">
                <polygon points="150 15, 300 200, 0 200" fill="${shapeColor}"/>
                <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    
        return render();
}
}

module.exports = Triangle;


