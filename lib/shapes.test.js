const Shapes = require('./shapes.js');
// The following testing suite checks the functionality of the shape classes and associated functions
describe('shapes', () => {
    describe('render', ()=> {
        describe('triangle.render', () => {
            it('should render a triangle, with the default color of black', () => { 
                const testTriangle = new Shapes.Triangle(); // Creates a new triangle
                expect(testTriangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="black" />'); // Checks the output of the render function
            })
        })
        describe('square.render', () => {
            it('should render a square, with the default color of black', () => {
                const testSquare = new Shapes.Square(); // Creates a new square 
                expect(testSquare.render()).toBe('<rect x="50" y="0" width="200" height="200" fill="black" />'); // Checks the output of the render function
            })
        })
        describe('circle.render', () => {
            it('should render a circle, with the default color of black', () => { 
                const testCircle = new Shapes.Circle(); // Creates a new circle
                expect(testCircle.render()).toBe('<circle cx="150" cy="100" r="100" fill="black" />'); // Checks the output of the render function
            })
        })
    })
    describe('setColor', () => {
        it('should set a created triangle to red', () => {
            const redTriangle = new Shapes.Triangle(); // Creates a new triangle
            redTriangle.setColor('red'); // Changes triangle color to red
            expect(redTriangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="red" />') // Checks the output of the render function
        })
    })
    describe('setText', () => {
        it('should set the text associated with a created circle to "ABC"', () => { 
            const textCircle = new Shapes.Circle(); // Creates a new circle
            textCircle.setText('ABC'); // Sets the circle text to 'ABC'
            expect(textCircle.text).toBe('ABC');  // Checks the text field of the created circle
        })
    })
})

