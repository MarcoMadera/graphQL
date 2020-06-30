const errorHandler = (error) => {
  console.error(error);
  throw new Error("Server failure");
};

module.exports = errorHandler;
