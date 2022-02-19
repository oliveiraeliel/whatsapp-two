import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

import { Container, Button, Input, Steps } from "./styles";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

  useEffect(() => {
    if (username == "" || password == "") {
      setDisabledBtn(true);
      return;
    }
    setDisabledBtn(false);
  }, [username, password]);

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

      <Button disabled={disabledBtn}>Login</Button>
      <a href="/whatsapp-two/">
        I don't have an account
      </a>
    </Container>
  );
};

export default Login;
