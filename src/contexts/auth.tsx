import React, { createContext, useState } from "react";
import { api } from "../services/api";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  Authenticate(
    username: string,
    password: string,
    route: string
  ): Promise<void>;
}

interface Header {
  Authorization: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function Authenticate(
    username: string,
    password: string,
    route: string
  ) {
    const Response = await api.post(`/user/${route}/`, {
      username: username,
      password: password,
    });

    if (!Response.data.token) {
      alert("Username or password incorrect!");
      return;
    }
    setUser(Response.data.user);
    // api.defaults.headers = {
    //   Authorization: `Bearer ${Response.data.token}`,
    // };

    localStorage.setItem("@App:user", JSON.stringify(Response.data.user));
    localStorage.setItem("@App:token", Response.data.token);

    window.location.href = "/whatsapp-two/#/home";
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), Authenticate, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
