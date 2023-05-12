const { CategoryService } = require('../services');

module.exports = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) { return res.status(400).json({ message: '"name" is required' }); }
    const category = await CategoryService.createCategory({ name });
    
    return res.status(201).json(category);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar categoria' });
  }
};