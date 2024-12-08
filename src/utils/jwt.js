const jwt = require("jsonwebtoken");

const sign = (payload) => {
  return jwt.sign(payload, "NodeJs");
};

const verify = (token) => {
  try {
    return jwt.verify(token, "NodeJs");
  } catch (error) {
    return {};
  }
};

module.exports = {
  sign,
  verify,
};
