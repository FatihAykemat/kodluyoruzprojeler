const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: String,
  detail: String,
  author: String,
  dateCreated: { type: Date, default: Date.now },
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;