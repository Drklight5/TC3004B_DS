import { createContext, ReactNode, useContext, useState } from "react";
import Auth from "../interface/auth";

interface AuthContextI {
  auth: Auth | null;
  setAuth: (auth: Auth | null) => void;
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

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
