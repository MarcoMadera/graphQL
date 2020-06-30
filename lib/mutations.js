const connectDb = require("./db");
const { ObjectID } = require("mongodb");
const errorHandler = require("./errorHandler");

module.exports = {
  addTvShow: async (root, { input }) => {
    const defaults = {
      network: "",
      creators: [],
      producers: [],
    };

    const newTvShow = Object.assign(defaults, input);
    let db;
    let tvShow;

    try {
      db = await connectDb();
      tvShow = await db.collection("shows").insertOne(newTvShow);
      newTvShow._id = tvShow.insertedId;
    } catch (err) {
      errorHandler(err);
    }
    return newTvShow;
  },

  editTvShow: async (root, { _id, input }) => {
    let db;
    let tvShow;

    try {
      db = await connectDb();
      await db
        .collection("shows")
        .updateOne({ _id: ObjectID(_id) }, { $set: input });
      tvShow = await db.collection("shows").findOne({ _id: ObjectID(_id) });
    } catch (err) {
      errorHandler(err);
    }
    return tvShow;
  },

  deleteTvShow: async (root, { _id }) => {
    let db;
    let tvShows;

    try {
      db = await connectDb();
      await db.collection("shows").deleteOne({ _id: ObjectID(_id) });
      tvShows = await db.collection("shows").find().toArray();
    } catch (err) {
      errorHandler(err);
    }
    return tvShows;
  },

  addActors: async (root, { tvShowID, actorID }) => {
    let db;
    let actor;
    let tvShow;

    try {
      db = await connectDb();
      tvShow = await db
        .collection("shows")
        .findOne({ _id: ObjectID(tvShowID) });
      actor = await db.collection("actors").findOne({ _id: ObjectID(actorID) });

      if (!tvShow) {
        throw new Error("tvShow does not exists");
      }
      if (!actor) {
        throw new Error("actor does not exists");
      }
      await db
        .collection("shows")
        .updateOne(
          { _id: ObjectID(tvShowID) },
          { $addToSet: { cast: ObjectID(actorID) } }
        );
    } catch (err) {
      errorHandler(err);
    }
    return tvShow;
  },
};
