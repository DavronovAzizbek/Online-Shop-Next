const { readFile } = require("../utils/fs");
const { sign } = require("../utils/jwt");

const login = (req, res) => {
  let { username, password } = req.body;
  let admins = readFile("admins");
  let admin = admins.find(
    (el) => el.username === username && el.password === password
  );

  if (admin) {
    let token = sign({ id: admin.id });
    res.cookie("token", token);
    res.redirect("/admin");
  } else {
    res.redirect("/login");
  }
};

module.exports = {
  login,
};
