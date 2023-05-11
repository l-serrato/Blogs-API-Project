module.exports = (req, res) => {
  const { token } = req.user;

  res.status(200).json({ token });
};