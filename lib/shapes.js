
class Shapes {
    constructor(text, textColour, shapeColour) {
        this.text = text;
        this.textColour = textColour;
        this.colour = colour; 
    }
}

class Triangle extends Shapes {
    constructor(text, textColour, shapeColour) {
            super(text, textColour, shapeColour);
        }
    }

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

module.exports = Shapes;