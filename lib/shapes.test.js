const Shapes = require('./shapes.js');

describe('triangle', ()=> {
    describe('render', () => {
        it('should render a triangle, with the default color of blue', () => {
            const testTriangle = new Shapes.Triangle();
            expect(testTriangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
})