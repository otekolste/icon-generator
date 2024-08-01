const check = async(input) => {
    if(input.length > 3) {
        throw new Error('Input must be less than 3 characters!');
    }
    return true;
}
module.exports = {
    check
}