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
    api
      .post("/user/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data.token) {
          // api.defaults.headers.
          console.log("1231");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // switch (response.status) {
    //   case 200:
    //     window.location.href = "/whatsapp-two/#/home";
    //     break;
    //   case 422:
    //     alert("Incorrect Data");
    //     break;
    //   case 500:
    //     alert("Server error :C");
    //     break;
    //   default:
    //     break;
    // }
    // api.defaults.headers = `Bearer ${response.data.token}`
  }

  return (
    <AuthContext.Provider value={{ signed: true, Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
