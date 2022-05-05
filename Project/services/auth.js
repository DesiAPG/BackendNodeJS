const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");
const User = require("./users");

class Auth {
  login(data) {
    return this.#createToken(data);
  }
  async signup(data) {
    userServ = new User();
    const user = await userServ.create(data);
    const token = this.#createToken();
    return {
      user,
      token,
    };
  }

  #createToken(payload) {
    const token = jwt.sign(payload, jwtSecret);
    return token;
  }
}
module.exports = Auth;
