const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const listingRouter = require("./routes/listing-routes");
const userRouter = require("./routes/user-routes");

const db_url =
  "mongodb+srv://admin:rootadmin@cluster0.yq6jouo.mongodb.net/Rentals?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/listing", listingRouter);
app.use("/api/user", userRouter);

const port = process.env.port || 5000;

mongoose
  .connect(db_url)
  .then(() => app.listen(5000))
  .then(() => console.log("Connected to MongoDB and Listening on port 5000"))
  .catch((err) => console.log(err));
