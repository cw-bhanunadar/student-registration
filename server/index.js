const express = require("express");
const bodyParser = require("body-parser");
const studentRouter = require("./route/studentRoutes");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/student", studentRouter);
app.use(cors);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(5000, () => console.log(`Server running on port 5000`));
