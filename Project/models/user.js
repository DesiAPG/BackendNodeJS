const { mongoose } = require("../config/db");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
