const Shapes = require("../shapes/shapes.js")
const Triangle = require("../shapes/triangle.js");
const Square = require("../shapes/square.js");
const Circle = require("../shapes/circle.js");

describe('Shapes', () => {

    describe('Triangle', () => {
        test('should return a blue triangle with SVG as goldenrod colored text within', () => {
            const triangle = new Triangle('SVG', 'blue', 'goldenrod');
            //triangle.style.color = 'blue';
            expect(triangle.render()).toEqual(`<svg id="triangle" viewBox="0 0 600 400" width="300" height="200">
            <polygon points="150 15, 300 200, 0 200" fill="goldenrod"/>
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="blue">SVG</text>
    </svg>`);
        });
    });

    describe('Square', () => {
        test('should return a red square with SVG as white colored text within', () => {
            const square = new Square('SVG', 'red', 'white');
           // square.style.color = 'red';
            expect(square.render()).toEqual(`<svg id="square" viewbox="0 0 600 400" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" Y="10" width="300" height="200" fill="white"></rect>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text>
        </svg>`);
        });
    });


    describe('Circle', () => {
        test('should return a green circle with SVG in violet colored text within', () => {
            const circle = new Circle('SVG', 'green', 'violet');
           // circle.style.color = "green";
            expect(circle.render()).toEqual(`<svg id="circle" viewBox="0 0 600 400" width="300" height="200">
            <circle cx="150" cy="150" r="100" fill="violet"/>
            <text x="150" y="170" font-size="60" text-anchor="middle" fill="green">SVG</text>
        </svg>`);
        });
    });
});