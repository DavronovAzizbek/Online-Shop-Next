const { readFile, writeFile } = require("../utils/fs");

const createProduct = (req, res) => {
  const { name, price, description, img, category_id } = req.body;
  let products = readFile("products");
  products.push({
    id: products.at(-1)?.id + 1 || 1,
    name,
    price,
    description,
    img,
    category_id,
  });

  writeFile("products", products);

  res.redirect("/admin");
};

module.exports = {
  createProduct,
};
