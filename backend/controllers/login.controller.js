import { sqlConfig, promise }from "../utils/mssql.js"
import sql from "mssql"

// Obtener todos los usuarios
export const postLogin = async (req, res) => {
  try {
    const { Username, Password } = req.body;

    if (!Username || !Password) {
      return res.status(400).json({ message: "Username y Password son requeridos" });
    }

    const pool = await promise;
    const result = await pool
      .request()
      .input("Username", sql.NVarChar(50), Username)
      .input("Password", sql.NVarChar(50), Password)
      .query("SELECT * FROM Users WHERE Username = @Username AND Password = @Password");

    if (result.recordset.length === 0) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    res.json({ message: "Login exitoso", user: result.recordset[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}