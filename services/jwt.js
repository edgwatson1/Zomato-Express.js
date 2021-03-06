const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const JWT_KEY = "some_random_key";

const createToken = user =>
  jwt.sign(
    { id: user.id, isadmin: user.isadmin, user_type_id: user.user_type_id },
    JWT_KEY,
    { expiresIn: 60 * 60 * 24 }
  );

const authenticateWithJwt = expressJwt({ secret: JWT_KEY });

module.exports = { createToken, authenticateWithJwt };
