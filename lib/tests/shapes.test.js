const Triangle = require("../triangle.js");
const Square = require("../square.js");
const Circle = require("../circle.js");
const colorName = require("../colors.js");

describe('Shape', () => {

    describe('Triangle', () => {
        it('should return a blue triangle', () => {
            const triangle = new Triangle('blue');
            triangle.style.color = "blue";
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

    describe('Square', () => {
        it('should return a red square', () => {
            const square = new Square();
            square.style.color = "red";
            expect(square.render()).toEqual('<rect x="10" y="10" width="300" height="200" fill="red" />');
        });
    });


    describe('Circle', () => {
        it('should return a green circle', () => {
            const circle = new Circle();
            circle.style.color = "green";
            expect(circle.render()).toEqual('<circle cx="300" cy="200" r="150" fill="green" />');
        });
    });
});