const mongoose = require("mongoose");

const connectDatabse = (url) => {
  return mongoose.connect(url);
};

module.exports = { connectDatabse };
