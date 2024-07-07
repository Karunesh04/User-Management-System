module.exports = (req, res, next) => {
    const { name, username, email, password, bio } = req.body;
    if (!name || !username || !email || !password || !bio) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    next();
  };