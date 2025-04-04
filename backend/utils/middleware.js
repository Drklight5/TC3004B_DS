import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1]; // Espera formato: Bearer <token>

  if (!token) return res.sendStatus(401); // No autorizado

  jwt.verify(token, process.env.JWT_SECRET || "defaultsecret", (err, user) => {
    //console.log(err)
    if (err) return res.sendStatus(403); // Token inválido
    req.user = user;
    next();
  });
};
