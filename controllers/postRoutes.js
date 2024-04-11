const router = require("express").Router();
const { BlogPost, User, Comments } = require("../models");

// http://localhost:3001/posts/:id
router.get("/:id", async (req, res) => {
  try {
    //add in whatever we want it to do when we hit the "add new post" page here
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
