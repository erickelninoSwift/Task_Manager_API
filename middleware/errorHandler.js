const errorHandler = (error, request, response, next) => {
  return response.status(500).json({
    error: "something went wrong , try agin later",
  });
};

module.exports = errorHandler;
