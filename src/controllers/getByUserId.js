const { UserService } = require('../services');

module.exports = async (req, res) => {
  try {
    const { userId } = req.params;
    const users = await UserService.getByUserId(userId);

    if (!users) throw Error;

    res.status(200).json(users);
  } catch (err) {
    res
      .status(404)
      .json({ message: 'User does not exist' });
  }
};