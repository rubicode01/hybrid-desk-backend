import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      res.status(401).json("Unauthorized");
    } else {
      const emailBelongingToToken = jwt.verify(token, process.env.JWT_SECRET);
      //console.log(emailBelongingToToken);
      if (emailBelongingToToken) {
        req.user = emailBelongingToToken;
        next();
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
