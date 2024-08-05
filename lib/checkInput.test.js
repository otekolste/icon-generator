const checkInput = require('./checkInput.js')
// This function tests that the "checkInput" function throws the appropriate error
describe('checkInput',()=>{
    it('should alert user via error when they enter a string of more than 3 characters', async() => {
        const err = new Error('Input must be less than 3 characters!');
        await expect(checkInput.check('abcd')).rejects.toThrow(err);
    })
})