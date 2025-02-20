import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export default function Auth() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const {logIn} = useAuthContext()

    const LogIn = () =>{
      if( email && password ){
        logIn({email, password})
        navigate("/home")
      } else{ alert("Introduce ambos datos") }

    }
  return (
    <div>
      <FormControl>
        <TextField
          id="email"
          label="Correo"
          variant="standard"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Contraseña"
          variant="standard"
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={LogIn}>
          Log In
        </Button>
      </FormControl>
    </div>
  );
}
