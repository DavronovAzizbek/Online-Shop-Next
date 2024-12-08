const { Router } = require("express");
const { getHome, getLogin } = require("../controllers/homeController");
const { createCategory } = require("../controllers/categoriesController");
const {
  getProductsByCategoryId,
} = require("../controllers/productsController");
const { getAdminPage } = require("../controllers/adminController");
const { login } = require("../controllers/loginController");
const verifyToken = require("../middlewares/verifyToken");
const { createProduct } = require("../controllers/productsController2");
const { getOrderPage, createOrder } = require("../controllers/orderController");

const router = Router();

router.get("/", getHome);
router.post("/login", login);
router.get("/login", getLogin);
router.get("/orders/:id", getOrderPage);
router.post("/orders/create", createOrder);
router.post("/products/create", createProduct);
router.get("/admin", verifyToken, getAdminPage);
router.post("/categories/create", createCategory);
router.get("/products/:id", getProductsByCategoryId);

module.exports = router;
