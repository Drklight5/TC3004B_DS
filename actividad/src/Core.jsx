import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./pages/Main/Main.jsx";
import { useAuthContext } from "./context/AuthContext";
import Items from "./pages/Items/Items";

export default function Core() {
  const { auth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth == null) {
      navigate("/auth");
    }
  }, [auth, navigate]);

  if (auth == null) return null; // Evita que el componente se renderice antes de la navegación

  return (
    <div>
      <Header />
      <Routes>
        <Route path="items" element={<Items/>} />
        <Route path="*" element={<Main />} />
      </Routes>
    </div>
  );
}
