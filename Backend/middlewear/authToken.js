const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
  try {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
     
    // console.log('Faulty Token:', token);
    if (!token) {
      return res.status(401).json({
        message: "No token provided",
        data: [],
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
      if (err) {
        console.log("JWT Verification Error:", err);
        return res.status(401).json({
            message: "Invalid token",
            error: true,
            success: false,
        });
      }

      req.user = decoded.data; 
      console.log('Decoded User:', req.user); 
      next();
    });
  } catch (err) {
    res.status(500).json({
      message: "An error occurred during authentication",
      data: [],
      error: true,
      success: false,
    });
  }
}

module.exports = authToken;