const BlogPost = require('../models/BlogPost');

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPage = (req, res) => {
  res.render('add_post');
};

exports.getEditPage = async (req, res) => {
  const post = await BlogPost.findOne({ _id: req.params.id });
  res.render('edit_post', { post });
};