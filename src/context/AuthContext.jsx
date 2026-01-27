import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authType, setAuthType] = useState(null);

  const openLogin = () => setAuthType("login");
  const openRegister = () => setAuthType("register");
  const closeAuth = () => setAuthType(null);

  return (
    <AuthContext.Provider
      value={{ authType, openLogin, openRegister, closeAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
