// src/components/auth/Auth.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./SignUp";

export default function Auth() {
  return (
    <Routes>
      {/* <Route index element={<Login />} /> ruta por defecto */}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      {/* redireccionar rutas no válidas a login */}
      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  );
}
