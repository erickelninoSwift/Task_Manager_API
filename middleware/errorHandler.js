const errorHandler = (error, request, response, next) => {
  return response.status(error.statusCode).json({ error: error.message });
};

module.exports = errorHandler;
