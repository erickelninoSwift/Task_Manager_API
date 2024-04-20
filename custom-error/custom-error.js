class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const customErrorMessage = (message, statusCode) => {
  return new CustomError(message, statusCode);
};
