const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");


class Auth {
  login(data) {
    const token = jwt.sign(data, jwtSecret);
    return token;
  }
}
module.exports = Auth;
