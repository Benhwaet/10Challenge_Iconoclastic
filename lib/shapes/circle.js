const Shapes = require('./shapes.js');


class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        `<svg id="circle" viewBox="0 0 600 400" width="300" height="200">
                <circle cx="150" cy="150" r="100" fill="${shapeColor}"/>
                <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    
        return render();
}
};


module.exports = Circle;