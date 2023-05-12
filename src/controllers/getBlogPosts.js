const { PostService } = require('../services');

module.exports = async (_req, res) => {
  try {
    const posts = await PostService.getBlogPosts();

    if (!posts) throw Error;

    res.status(200).json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar posts no banco', error: err.message });
  }
};