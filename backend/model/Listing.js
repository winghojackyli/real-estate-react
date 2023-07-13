const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  imageURL: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bed: {
    type: Number,
    required: true,
  },
  bath: {
    type: Number,
    required: true,
  },
  floorArea: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Listing", listingSchema);
