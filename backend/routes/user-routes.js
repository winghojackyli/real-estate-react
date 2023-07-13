const express = require("express");
const {
  addUser,
  login,
  getAllUsers,
} = require("../controller/user-controller");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", addUser);
router.post("/login", login);

module.exports = router;
