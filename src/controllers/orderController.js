const { readFile, writeFile } = require("../utils/fs");

const getOrderPage = (req, res) => {
  let { id } = req.params;
  let products = readFile("products");
  let product = products.find((el) => el.id === id * 1);
  if (product) {
    res.render("orders", { product });
  } else {
    res.render("notFound");
  }
};

const createOrder = (req, res) => {
  let { product_id, phone, count, address } = req.body;
  let orders = readFile("orders");
  let products = readFile("products");
  let product = products.find((el) => el.id == product_id);
  orders.push({
    id: orders.at(-1)?.id + 1 || 1,
    product,
    phone,
    count,
    address,
  });

  writeFile("orders", orders);
  res.redirect("/");
};

module.exports = {
  getOrderPage,
  createOrder,
};
