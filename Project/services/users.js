const userModel = require("../models/user");

class Users {
  async getAll() {
    try {
      const users = await userModel.find();
      return users;
    } catch (error) {
      console.log(error);
    }
  }

  async create(data) {
    try {
      const user = await userModel.create(data);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  async delete(data) {
    try {
      const user = await userModel.deleteOne(data);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Users;
