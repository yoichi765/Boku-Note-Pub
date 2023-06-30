const express = require("express");
const router = express.Router();
const knex = require("../db/knex");

/* GET home page. */
router.get("/", function (req, res, next) {
  const userId = req.session.userid;
  const username = req.session.username;
  const isAuth = Boolean(userId);
  console.log(`isAuth: ${isAuth}`);

  res.render("index", {
    title: "Boku-Note",
    username: username,
    isAuth: isAuth,
  });
});

router.post("/", function (req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);
});

router.use("/signup", require("./signup"));
router.use("/signin", require("./signin"));
router.use("/logout", require("./logout"));
router.use("/users", require("./users"));
router.use("/posts", require("./posts"));

module.exports = router;
