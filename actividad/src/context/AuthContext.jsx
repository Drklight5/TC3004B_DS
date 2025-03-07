import { createContext, ReactNode, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext debe usarse dentro de un AuthProvider");
  return context;
};

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const logIn = (credentials) => {
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
