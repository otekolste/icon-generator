const check = async(input) => { // This function, called within the context of an inquirer prompt, checks to ensure the user has inputed no more than 3 characters
    if(input.length > 3) {
        throw new Error('Input must be less than 3 characters!'); // Throws new error if the length of the input is greater than 3
    }
    return true; // Otherwise, returns true (all clear)
}
module.exports = {
    check
}