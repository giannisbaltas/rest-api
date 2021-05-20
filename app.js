"use strict";

require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const postsRoute = require("./routes/posts");

// Middleware
app.use("/posts", postsRoute);

// ROUTES
// get , post , patch , delete
app.get("/", async (req, res) => {
  res.send("We are on home");
});

// Connect to MongoDB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

// How to we start listening to server
app.listen(3000);
