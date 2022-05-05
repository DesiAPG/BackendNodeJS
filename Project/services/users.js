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
      if (error.code === 11000) {
        const message = "Al menos uno de los campos ingresados ya existe";
        console.log(message);
      }
    }
  }
  async delete(id) {
    try {
      const user = await userModel.findByIdAndDelete(id);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  async update(id, data) {
    try {
      const user = await userModel.findByIdAndUpdate(id, data);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Users;
