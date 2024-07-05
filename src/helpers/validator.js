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

  isPositiveInteger(value) {
    return Number.isInteger(value) || value < 0;
  }

  isPositiveFloat(value) {
    return (Number(value) === value && !Number.isInteger(value)) || value < 0;
  }
}

module.exports = Validator;
