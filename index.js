// index.js
//import dotenv from "dotenv";
//import connectDB from "./database/db.js";

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/mongodb.config.js");
dotenv.config();
connectDB();

const app = express();

// middleware (JSON data read karne ke liye)
app.use(express.json());

// simple route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
