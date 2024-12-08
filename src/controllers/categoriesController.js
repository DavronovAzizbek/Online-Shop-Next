const { readFile, writeFile } = require("../utils/fs");

const createCategory = (req, res) => {
  const { name, img } = req.body;
  let categories = readFile("categories");
  categories.push({
    id: categories.at(-1)?.id + 1 || 1,
    name,
    img,
  });

  writeFile("categories", categories);

  res.redirect("/");
};

module.exports = {
  createCategory,
};
