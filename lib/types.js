const connectDb = require("./db");
const { ObjectID } = require("mongodb");
const errorHandler = require("./errorHandler");

module.exports = {
  TvShow: {
    cast: async ({ cast }) => {
      let db;
      let actorsData;
      let ids;

      try {
        db = await connectDb();
        ids = cast ? cast.map((id) => ObjectID(id)) : [];
        actorsData =
          ids.length > 0
            ? await db
                .collection("actors")
                .find({ _id: { $in: ids } })
                .toArray()
            : [];
      } catch (err) {
        errorHandler(err);
      }
      return actorsData;
    },
  },
};
