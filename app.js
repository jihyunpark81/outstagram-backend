const express = require("express");
const cookieParser = require("cookie-parser");
require("express-async-errors");
const app = express();
const port = 3000;

const router = require("./routes");

app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});