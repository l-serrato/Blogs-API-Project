const { CategoryService } = require('../services');

module.exports = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) { res.status(400).json({ message: '"name" is required' }); }
    const category = await CategoryService.createCategory({ name });
    
    res.status(201).json({ name });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar categoria' });
  }
};