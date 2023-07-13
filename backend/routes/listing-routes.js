const express = require("express");
const {
  getAllListings,
  addListing,
  deleteListingById,
  updateListingById,
  filterListings,
} = require("../controller/listing-controller");

const router = express.Router();

router.get("/", getAllListings);
router.get("/query", filterListings);
router.post("/", addListing);
router.delete("/:id", deleteListingById);
router.put("/:id", updateListingById);

module.exports = router;
