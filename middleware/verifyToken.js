import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      res.status(401).json("Unauthorized"); //Nicht zu viele Infos über den Grund geben
    } else {
      const emailBelongingToToken = jwt.verify(
        //.verify() returnt den payload, der zum Erstellen des tokens benutzt wurde (email in unserem Fall)
        token,
        process.env.JWT_SECRET
      );
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
