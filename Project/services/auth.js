const jwt = require("jsonwebtoken");
class Auth {
  login(data) {
    const token = jwt.sign(data, "1000239");
    return token;
  }
}
module.exports = Auth;
