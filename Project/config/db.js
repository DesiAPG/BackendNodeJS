const mongoose = require("mongoose");

const connection = async () => {
  const conn = await mongoose.connect(
    `mongodb+srv://${dbusername}:${dbPassword}@c${dbHost}/${dbName}?retryWrites=true&w=majority`
  );
  console.log(first);
};

module.exports = { connection, mongoose };
