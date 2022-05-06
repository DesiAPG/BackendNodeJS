const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");
const User = require("./users");
const bcrypt = require("bcrypt");

class Auth {
  async login(data) {
    const email = data.email;
    const userServ = new User();
    const user = await userServ.getByEmail(email);
    console.log(user);
    if (user) {
      {
        return this.#createToken(data);
      }
    }
  }
  async signup(data) {
    if (data.password) {
      data.password = await this.#encrypt(data.password);
    }
    const userServ = new User();
    const user = await userServ.create(data);
    const userData = {
      name: user.name,
      email: user.email,
      id: user.id,
    };
    const token = this.#createToken(userData);
    return {
      user: userData,
      token,
    };
  }

  #createToken(payLoad) {
    const token = jwt.sign(payLoad, jwtSecret, {
      expiresIn: "7d",
    });
    return token;
  }

  async #encrypt(string) {
    try {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(string, salt);
      return hash;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Auth;
