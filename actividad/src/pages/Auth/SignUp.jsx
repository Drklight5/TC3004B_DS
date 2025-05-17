import { Button, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/auth";

export default function Signup() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState(""); // Usamos "email" como "username"
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (nombre && email && password) {
            try {
                const response = await signup(nombre, email, password);
                console.log(response);
                if (response.message === "Cuenta creada exitosamente") {
                    alert("Registro exitoso, ahora inicia sesión");
                    navigate("/login");
                } else {
                    alert(response.message || "Error en el registro");
                }
            } catch (err) {
                console.error(err);
                alert("Ocurrió un error");
            }
        } else {
            alert("Todos los campos son obligatorios");
        }
    };

    return (
        <div>
            <FormControl>
                <TextField
                    label="Nombre"
                    variant="standard"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <TextField
                    label="Correo"
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Contraseña"
                    variant="standard"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" onClick={handleSignup}>
                    Registrarse
                </Button>
            </FormControl>
            <Typography variant="body2" sx={{ mt: 2 }}>
                ¿Ya tienes cuenta?{" "}
                <Link to="/auth/login" style={{ textDecoration: "none", color: "blue" }}>
                    Entrar aquí
                </Link>
            </Typography>
        </div>
    );
}
