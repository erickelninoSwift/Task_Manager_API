const notFound = (request, response) =>
  response.status(404).send("<h1> 404 Route not found </h1>");

module.exports = notFound;
