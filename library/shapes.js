
class Shapes {
    constructor(text, textColour, colour) {
        this.text = text;
        this.textColour = textColour;
        this.colour = colour; 
    }
}

class Triangle extends Shapes {
    constructor(text, textColour, colour) {
            super(text, textColour, colour);
        }
    }

class Square extends Shapes {
    constructor(text, textColour, colour) {
            super(text, textColour, colour);
        }
    }

class Circle extends Shapes {
    constructor(text, textColour, colour) {
            super(text, textColour, colour);
        }
    }

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');