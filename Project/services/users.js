const userModel = require("../models/user");

class Users {
  async getAll() {
    try {
      const users = await userModel.find();
    } catch (error) {
      console.log(error);
    }
  }

  create(data) {}
}

module.exports = Users;
