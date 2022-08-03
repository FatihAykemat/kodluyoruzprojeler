const BlogPost = require('../models/BlogPost');

exports.getAllPosts = async (req, res) => {
  const posts = await BlogPost.find({}).sort('-dateCreated');
  res.render('index', { posts });
};

exports.getPost = async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  res.render('post', { post });
};

exports.createPost = async (req, res) => {
  await BlogPost.create(req.body);
  res.redirect('/');
};

exports.updatePost = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  BlogPost.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      detail: req.body.detail,
    },
    { new: true },
    (err, post) => {
      if (err) return console.log(err);
      res.redirect('/post/' + req.params.id);
    }
  );
};

exports.deletePost = async (req, res) => {
  await BlogPost.findByIdAndDelete(req.params.id);
  res.redirect('/');
};