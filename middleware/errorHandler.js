const { CustomError } = require("../custom-error/custom-error");

const errorHandler = (error, request, response, next) => {
  if (error instanceof CustomError) {
    return response.status(error.statusCode).json({ error: error.message });
  }
  return response.status(500).json({ error: error.message });
};

module.exports = errorHandler;
