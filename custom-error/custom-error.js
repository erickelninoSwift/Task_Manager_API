class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}

const customErrorMessage = (message, statusCode) => {
  return new CustomError(message, statusCode);
};

module.exports = { customErrorMessage, CustomError };
