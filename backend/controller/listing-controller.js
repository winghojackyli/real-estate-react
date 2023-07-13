const mongoose = require("mongoose");
const Listing = require("../model/Listing");
const User = require("../model/User");

// add a listing
const addListing = async (req, res, next) => {
  // owner means ownerId
  const { imageURL, price, city, owner, bed, bath, floorArea } = req.body;

  let existingUser;
  try {
    existingUser = await User.findById(owner);
  } catch (err) {
    console.log(err);
  }

  if (!existingUser) {
    return res.status(404).json({ message: "User not exists" });
  }

  const listing = new Listing({
    imageURL,
    price,
    city,
    owner,
    bed,
    bath,
    floorArea,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await listing.save({ session });
    existingUser.listings.push(listing);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
  }

  return res.status(201).json({ listing });
};

//show all listings
const getAllListings = async (req, res, next) => {
  let listings;
  try {
    listings = await Listing.find().populate("owner");
  } catch (err) {
    return console.log(err);
  }

  if (listings < 1) {
    return res.status(404).json({ messge: "No Listings Availbale" });
  }

  return res.status(200).json({ listings });
};

// delete by Id
const deleteListingById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await Listing.findByIdAndDelete(id);
    if (result) {
      return res.status(202).json({ message: "Listing deleted" });
    } else {
      return res
        .status(404)
        .json({ message: "Deletion failed, listing does not exist" });
    }
  } catch (err) {
    console.log(err);
  }
};

// update Listing
const updateListingById = async (req, res, next) => {
  const { imageURL, price, city, bed, bath, floorArea, owner } = req.body;
  const listingId = req.params.id;
  let listing;
  try {
    listing = await Listing.findByIdAndUpdate(listingId, {
      owner,
      imageURL,
      price,
      city,
      bed,
      bath,
      floorArea,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!listing) {
    return res.status(500).json({ message: "Unable to update" });
  }
  return res.status(200).json({ listing });
};

const filterListings = async (req, res, next) => {
  const bed = req.query.bed;
  const city = req.query.city;
  let listings;
  try {
    listings = await Listing.find({ bed, city });
  } catch (err) {
    return console.log(err);
  }
  if (listings.length === 0) {
    return res.status(200).json({ listings: [] });
  }
  return res.status(200).json({ listings });
};

module.exports = {
  getAllListings,
  addListing,
  deleteListingById,
  updateListingById,
  filterListings,
};
