import { sqlConfig, promise }from "../utils/mssql.js"
import sql from "mssql";
import crypto from "crypto";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

// Función para hashear la contraseña
function hashPassword(password, salt) {
  const pepper = process.env.PEPPER || "defaultpepper";
  return crypto
    .createHmac("sha256", pepper)
    .update(password + salt)
    .digest("hex");
}

// POST: Login de usuario
export const postLogin = async (req, res) => {
  try {
    const { Username, Password } = req.body;
    if (!Username || !Password) {
      return res
        .status(400)
        .json({ message: "Username y Password son requeridos" });
    }

    const pool = await promise;
    const result = await pool
      .request()
      .input("Username", sql.NVarChar(50), Username)
      .query("SELECT * FROM Users WHERE Username = @Username");

    if (result.recordset.length === 0) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    const user = result.recordset[0];
    console.log(user, user.Salt, user.Password);
    const hashedInputPassword = hashPassword(Password, user.Salt);

    if (hashedInputPassword !== user.Password) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    // Generar el token
    const token = jwt.sign(
      { id: user.ID, username: user.Username }, // payload
      process.env.JWT_SECRET || "defaultsecret", // clave secreta
      { expiresIn: "2h" } // duración
    );

    res.json({
      message: "Login exitoso",
      token,
      user: { id: user.ID, nombre: user.Nombre, username: user.Username },
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST: Crear cuenta de usuario 
export const postCreateAccount = async (req, res) => {
  try {
    const { Nombre, Username, Password } = req.body;
    if (!Nombre || !Username || !Password) {
      return res
        .status(400)
        .json({ message: "Todos los campos son requeridos" });
    }

    const pool = await promise;

    // Verificar si el Username ya existe
    const userCheck = await pool
      .request()
      .input("Username", sql.NVarChar(50), Username)
      .query("SELECT COUNT(*) as count FROM Users WHERE Username = @Username");

    if (userCheck.recordset[0].count > 0) {
      return res.status(409).json({ message: "El Username ya está en uso" });
    }

    // Generar sal aleatoria
    const salt = crypto.randomBytes(16).toString("hex");
    const hashedPassword = hashPassword(Password, salt);

    // Insertar el usuario en la BD
    await pool
      .request()
      .input("Nombre", sql.NVarChar(100), Nombre)
      .input("Username", sql.NVarChar(50), Username)
      .input("Password", sql.NVarChar(64), hashedPassword)
      .input("Salt", sql.NVarChar(32), salt)
      .query(
        "INSERT INTO Users (Nombre, Username, Password, Salt) VALUES (@Nombre, @Username, @Password, @Salt)"
      );

    res.status(201).json({ message: "Cuenta creada exitosamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};