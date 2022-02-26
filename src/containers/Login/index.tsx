import { TextField } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { api } from "../../services/api";
import AuthContext from "../../contexts/auth";

import { Container, Button, Input, Steps } from "./styles";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

  const context = useContext(AuthContext);

  useEffect(() => {
    if (username == "" || password == "") {
      setDisabledBtn(true);
      return;
    }
    setDisabledBtn(false);
  }, [username, password]);

  const handleLogin = () => {
    context.Login(username, password);
    // api
    //   .post("/user/login", { username: username, password: password })
    //   .then((res) => {
    //     if (res.status == 200) {
    //       window.location.href = "/whatsapp-two/#/home";
    //     }
    //   })
    //   .catch((err) => alert("User not found"));
  };

  return (
    <Container>
      <span>Login</span>
      <Input>
        <TextField
          label="Username"
          type="text"
          variant="filled"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Input>
      <Input>
        <TextField
          label="Password"
          type="password"
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Input>

      <Button
        disabled={disabledBtn}
        style={{ opacity: disabledBtn ? "0.5" : "1" }}
        onClick={handleLogin}
      >
        Login
      </Button>
      <a href="/whatsapp-two/">I don't have an account yet</a>
    </Container>
  );
};

export default Login;
