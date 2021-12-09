const stringLength = (string) => {
  if (string.length > 10) {
    throw Error('The word is too long');
  } else if (string.length < 1) {
    throw Error('The word is too short');
  } else {
    return string.length;
  }
};

module.exports = stringLength;