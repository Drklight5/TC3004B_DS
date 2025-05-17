import { Button, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { login } from "../../services/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { logIn } = useAuthContext();

    const LogIn = async () => {
        if (email && password) {
            let response = await login(email, password);
            console.log(response);
            if (response.user) {
                logIn({ email, password });
                navigate("/home");
            } else {
                alert("Credenciales incorrectas");
            }
        } else {
            alert("Introduce ambos datos");
        }
    };

    return (
        <div>
            <FormControl>
                <TextField
                    id="email"
                    label="Correo"
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="password"
                    label="Contraseña"
                    variant="standard"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" onClick={LogIn} sx={{ mt: 2 }}>
                    Log In
                </Button>
            </FormControl>

            <Typography variant="body2" sx={{ mt: 2 }}>
                ¿No tienes cuenta?{" "}
                <Link to="/auth/signup" style={{ textDecoration: "none", color: "blue" }}>
                    Regístrate aquí
                </Link>
            </Typography>
        </div>
    );
}
