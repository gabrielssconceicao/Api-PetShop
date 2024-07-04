class Validator {
  validateString(string, min, max) {
    return !string || string.length < min || string.length > max;
  }

  validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !email || !regex.test(email);
  }

  validateCategory(category, options) {
    return !category || !options.includes(category);
  }
}

module.exports = Validator;
