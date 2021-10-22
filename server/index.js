const path = require("path");
const express = require("express");
const app = express();
const distPath = path.resolve(__dirname, "..", "dist");
app.use("/dist", express.static(distPath));
app.listen(3000);
