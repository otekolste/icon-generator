const checkInput = require('./checkInput.js')

describe('checkInput',()=>{
    it('should alert user via error when they enter a string of more than 3 characters', async() => {
        const err = new Error('Input must be less than 3 characters!');
        await expect(checkInput.check('abcd')).rejects.toThrow(err);
    })
})