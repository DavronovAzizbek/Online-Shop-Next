const { readFile } = require("../utils/fs");

const getProductsByCategoryId = (req, res) => {
  let { id } = req.params;
  let products = readFile("products");
  let categories = readFile("categories");
  if (id == "all") {
    res.render("products", { products, categories });
    return;
  }
  let filteredProducts = products.filter((el) => el.category_id == id);

  res.render("products", { products: filteredProducts, categories });
};

module.exports = {
  getProductsByCategoryId,
};
