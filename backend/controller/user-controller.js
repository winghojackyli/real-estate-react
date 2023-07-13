const User = require("../model/User");
const bcrypt = require("bcryptjs");

const db_url =
  "mongodb+srv://admin:rootadmin@cluster0.yq6jouo.mongodb.net/Rentals?retryWrites=true&w=majority";

// Add new user
// there is one admin user created
// email: admin@test.com
// password: 12345
const addUser = async (req, res, next) => {
  const {
    password = "12345",
    name,
    email,
    tel = "(604)-XXX-XXXX",
    listings = [],
    isAdmin = false,
  } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }

  if (existingUser) {
    return res.status(400).json({ message: "User already exists!" });
  }

  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    name,
    email,
    tel,
    password: hashedPassword,
    listings,
    isAdmin,
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }

  return res.status(201).json(user);
};

// Login
// credential is : email:admin@test.com password:12345
const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser || !existingUser.isAdmin) {
    return res.status(401).json({ message: "Not an authorized user!" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (isPasswordCorrect) {
    return res.status(200).json({ auth: true });
  } else {
    return res.status(404).json({ auth: false });
  }
};

// Get all users
const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }

  return res.status(200).json({ users });
};

module.exports = { addUser, login, getAllUsers };
