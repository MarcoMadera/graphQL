const connectDb = require("./db");
const { ObjectID } = require("mongodb");
const errorHandler = require("./errorHandler");

module.exports = {
  getTvShows: async () => {
    let db;
    let tvshows = [];

    try {
      db = await connectDb();
      tvshows = await db.collection("shows").find().toArray();
    } catch (error) {
      errorHandler(error);
    }

    return tvshows;
  },
  getTvShow: async (root, { id }) => {
    let db;
    let tvshow;

    try {
      db = await connectDb();
      tvshow = await db.collection("shows").findOne({ _id: ObjectID(id) });
    } catch (error) {
      errorHandler(error);
    }

    return tvshow;
  },
};
