const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const listingRouter = require("./routes/listing-routes");
const userRouter = require("./routes/user-routes");

const app = express();
dotenv.config();

const port = process.env.port || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(port))
  .then(() => console.log("Connected to MongoDB and Listening on port 5000"))
  .catch((err) => console.log(err));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/listing", listingRouter);
app.use("/api/user", userRouter);
