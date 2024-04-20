const asyncwapper = (callback) => {
  return async (request, response, next) => {
    try {
      await callback(request, response, next);
    } catch (error) {
      console.log(`Error was found : ${error}`);
      next(error);
    }
  };
};

module.exports = asyncwapper;
