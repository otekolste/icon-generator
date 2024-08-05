const Shapes = require('./shapes.js');

describe('shapes', () => {
    describe('render', ()=> {
        describe('triangle.render', () => {
            it('should render a triangle, with the default color of black', () => {
                const testTriangle = new Shapes.Triangle();
                expect(testTriangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="black" />');
            })
        })
        describe('square.render', () => {
            it('should render a square, with the default color of black', () => {
                const testSquare = new Shapes.Square();
                expect(testSquare.render()).toBe('<rect x="50" y="0" width="200" height="200" fill="black" />');
            })
        })
        describe('circle.render', () => {
            it('should render a circle, with the default color of black', () => {
                const testCircle = new Shapes.Circle();
                expect(testCircle.render()).toBe('<circle cx="150" cy="100" r="100" fill="black" />');
            })
        })
    })
    describe('setColor', () => {
        it('should set a created triangle to red', () => {
            const redTriangle = new Shapes.Triangle();
            redTriangle.setColor('red');
            expect(redTriangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="red" />')
        })
    })
    describe('setText', () => {
        it('should set the text associated with a created circle to "ABC"', () => {
            const textCircle = new Shapes.Circle();
            textCircle.setText('ABC');
            expect(textCircle.text).toBe('ABC');
        })
    })
})

