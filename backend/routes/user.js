const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const User = mongoose.model("User");

router.get("/user/:id", requireLogin, (req, res) => {
  User.findOne({ _id: req.params.id })
    .select("-password")
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      return res.status(404).json({ error: "User not found" });
    });
});

module.exports = router;
