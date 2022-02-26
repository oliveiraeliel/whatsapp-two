import React, { createContext, useState } from "react";
import { api } from "../services/api";

interface AuthContextData {
  signed: boolean;
  Login(username: string, password: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function Login(username: string, password: string) {
    const response = await api.post("/user/login", {
      username: username,
      password: password,
    });

    console.log(response.status);
    // api.defaults.headers.Authorization = `Bearer ${response.data.token}`
  }

  return (
    <AuthContext.Provider value={{ signed: true, Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
