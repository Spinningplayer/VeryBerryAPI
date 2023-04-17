const jwt = require("jsonwebtoken");
const env = require('../Config/env/env.js')

const verifyToken = (req, res, next) => {
  let token =
    req.body.token || req.query.token || req.headers["authorization"];
  token = token.split(" ")[1];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, env.token);
    req.user = decoded;
  } catch (err) {
    console.log(err);
    console.log(token);
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;