const stringLength = string => {
    if (string.length > 10){
        throw('The word is too long');
    } else if (string.length < 1){
        throw('The word is too short');
    } else {
    return string.length;
    }
};

module.exports = stringLength;