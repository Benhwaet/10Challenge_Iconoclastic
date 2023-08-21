
class Shapes {
    constructor(text, textColour, shapeColour) {
        this.text = text;
        this.textColour = textColour;
        this.shapeColour = colour; 
    }
}

class Triangle extends Shapes {
    constructor(text, textColour, shapeColour) {
            super(text, textColour, shapeColour);
        }
    }
const triangle = new Triangle(text, textColour, shapeColour);


class Square extends Shapes {
    constructor(text, textColour, shapeColour) {
            super(text, textColour, shapeColour);
        }
    }

class Circle extends Shapes {
    constructor(text, textColour, shapeColour) {
            super(text, textColour, shapeColour);
        }
    }

module.exports = Shapes, Triangle, Square, Circle;