const connectDb = require("./db");

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
};
