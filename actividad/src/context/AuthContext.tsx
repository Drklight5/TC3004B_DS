import { createContext, ReactNode, useContext, useState } from "react";
import Auth from "../interface/Auth";

interface AuthContextI {
  auth: Auth | null;
  logIn: (auth: Auth ) => void;
  logOut: () => void
}

const AuthContext = createContext<AuthContextI | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext debe usarse dentro de un AuthProvider");
  return context;
};

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<Auth | null>(null);
  const logIn = (credentials : Auth) => {
    setAuth(credentials)
  } 

  const logOut = () =>{
    setAuth(null)
  }



  return (
    <AuthContext.Provider value={{ auth, logIn, logOut}}>
      {children}
    </AuthContext.Provider>
  );
}
