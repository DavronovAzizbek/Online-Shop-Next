const { readFile } = require("../utils/fs");
const { verify } = require("../utils/jwt");

const verifyToken = (req, res, next) => {
  let token = req.cookies.token;
  let admins = readFile("admins");
  let admin = verify(token);
  let checkAdmin = admins.find((el) => el.id === admin.id);
  if (checkAdmin) {
    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = verifyToken;
