// controllers/authController.js
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import crypto from "crypto";


dotenv.config();

function hashPassword(password, salt) {
  const pepper = process.env.PEPPER || "defaultpepper";
  return crypto
    .createHmac("sha256", pepper)
    .update(password + salt)
    .digest("hex");
}

// POST: Crear cuenta de usuario
export const postCreateAccount = async (req, res) => {
  try {
    const { Nombre, Username, Password } = req.body;
    if (!Nombre || !Username || !Password) {
      return res
        .status(400)
        .json({ message: "Todos los campos son requeridos" });
    }

    const existingUser = await User.findOne({ Username });
    if (existingUser) {
      return res.status(409).json({ message: "El Username ya está en uso" });
    }

    const salt = crypto.randomBytes(16).toString("hex");
    const hashedPassword = hashPassword(Password, salt);

    const newUser = new User({
      Nombre,
      Username,
      Password: hashedPassword,
      Salt: salt,
    });

    await newUser.save();
    res.status(201).json({ message: "Cuenta creada exitosamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST: Login de usuario
export const postLogin = async (req, res) => {
  try {
    const { Username, Password } = req.body;
    if (!Username || !Password) {
      return res
        .status(400)
        .json({ message: "Username y Password son requeridos" });
    }

    const user = await User.findOne({ Username });
    if (!user) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    const hashedInputPassword = hashPassword(Password, user.Salt);
    if (hashedInputPassword !== user.Password) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.Username },
      process.env.JWT_SECRET || "defaultsecret",
      { expiresIn: "2h" }
    );

    res.json({
      message: "Login exitoso",
      token,
      user: { id: user._id, nombre: user.Nombre, username: user.Username },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
