const express = require("express");
const path = require("path");
const router = require("./routes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));
app.use(express.static(path.join(process.cwd(), "src", "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);

app.listen(7000, () => {
  console.log(7000);
});
