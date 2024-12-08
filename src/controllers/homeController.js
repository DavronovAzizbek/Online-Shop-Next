const { readFile } = require("../utils/fs");

const getHome = (req, res) => {
  let categories = readFile("categories");
  res.render("index", { categories });
};

const getLogin = (req, res) => {
  res.render("login");
};
module.exports = {
  getHome,
  getLogin,
};
