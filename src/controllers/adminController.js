const { readFile } = require("../utils/fs");

const getAdminPage = (req, res) => {
  let products = readFile("products");
  let orders = readFile("orders");
  res.render("admin", { products, orders });
};

module.exports = {
  getAdminPage,
};
