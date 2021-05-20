const express = require("express");
const router = express.Router();
const Post = require("../models/post");

//GET BACK ALL THE posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

// SUBMIT A post
router.post("/", async (req, res) => {
  // console.log(req.body);
  const post = new Post({
    title: req.body.title,
    author: req.body.author,
  });

  try {
    const savedpost = await Post.save();
    res.json(savedpost);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

//SPECIFIC post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

//Delete specific post
router.delete("/:postId", async (req, res) => {
  try {
    const removedpost = await Post.deleteOne({ _id: req.params.postId });
    res.json(removedpost);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

//Update a post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedpost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedpost);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});
module.exports = router;
