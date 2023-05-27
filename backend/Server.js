// Requirements
const express = require("express");
const mongoose = require("mongoose");
const Routes = require("./Routes/Routes");
const cors = require("cors");
require("dotenv").config();

// App Initializations
const app = express();
app.use(express.json());
app.use(cors());

// Routes and Requests
app.use("/", Routes);

// Listen
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to the database and app is listening on port: ",
        process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error));
