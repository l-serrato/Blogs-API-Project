const { PostService } = require('../services');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await PostService.getByBlogPostId(id);

    if (!posts) throw Error;

    res.status(200).json(posts);
  } catch (err) {
    res
      .status(404)
      .json({ message: 'Post does not exist' });
  }
};