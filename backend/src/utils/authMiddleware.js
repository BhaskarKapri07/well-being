const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  // Extract the token from the 'Authorization' header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Format: "Bearer TOKEN"

  if (token == null) {
    return res.sendStatus(401); // Unauthorized if no token is present
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    // console.log("Decoded JWT: ", user);
    req.user = user; 
    next();
  });
};

module.exports = authenticateToken;
