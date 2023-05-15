const { PostService } = require('../services');

module.exports = async (req, res) => {
  const { id } = req.params;
    const posts = await PostService.getByBlogPostId(id);
    // console.log(posts);
    if (posts) {
    return res.status(200).json(posts); 
}
    return res
      .status(404)
      .json({ message: 'Post does not exist' });
};