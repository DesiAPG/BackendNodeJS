const { mongoose } = require("../config/db");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
