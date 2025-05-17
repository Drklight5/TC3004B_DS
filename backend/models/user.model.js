// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Nombre: { type: String, required: true },
  Username: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  Salt: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);
