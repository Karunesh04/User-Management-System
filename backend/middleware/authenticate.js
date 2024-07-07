const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, 'jwtSecret');
    req.user = decoded.id;
    next();
  } catch (e) {
    res.status(400).json({ message: 'Token is not valid' });
  }
};