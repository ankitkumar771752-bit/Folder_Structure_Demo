const express = require("express");
const authRoutes = require("./routes/authRoute");
const studentRoutes = require("./routes/studentRoute");
const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api", studentRoutes);
module.exports = app;
