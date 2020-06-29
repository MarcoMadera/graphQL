const connectDb = require("./db");
const { ObjectID } = require("mongodb");

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
      console.error(err);
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
      console.error(err);
    }
    return tvShow;
  },
};
