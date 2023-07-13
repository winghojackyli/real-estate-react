const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  tel: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  listings: [{ type: mongoose.Types.ObjectId, ref: "Listing" }], // only for ordinary user
  password: String, // only required for admin
});

module.exports = mongoose.model("User", userSchema);
