import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
  auth: null,
  authenticate: () => {},
  logout: () => {},
});

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const authenticate = (token) => {
    setAuth(token);
  };
  const logout = () => {
    localStorage.removeItem("userAuth");
    setAuth(null);
  };

  return <Provider value={{ auth, authenticate, logout }}>{children}</Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used with a AuthProvider");
  return context;
};
