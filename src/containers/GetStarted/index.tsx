import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { fieldVerify } from "../../utils/index";

import {
  Container,
  Input,
  Button,
  LetsGetStarted,
  Form,
  Buttons,
  Steps,
} from "./styles";

const GetStarted = () => {
  const [formPosition, setFormPosition] = useState<number>(0);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

  useEffect(() => {
    setDisabledBtn(fieldVerify(username));
  }, [username]);

  useEffect(() => {
    setDisabledBtn(fieldVerify(password));
  }, [password]);

  useEffect(() => {
    if (formPosition == 1) {
      if (username != "") setDisabledBtn(false);
      else setDisabledBtn(true);
    }
    if (formPosition == 2) {
      if (password != "") setDisabledBtn(false);
      else setDisabledBtn(true);
    }
  }, [formPosition]);

  const handleGetStarted = () => {
    if (formPosition < 2) {
      setFormPosition(formPosition + 1);
      return;
    }
    if(formPosition == 2){
      window.location.href = "/whatsapp-two/#/home"
    }
  };

  const renderSwitch = () => {
    switch (formPosition) {
      case 1:
        return "Next";
        break;
      case 2:
        return "Create account";
        break;
    }
  };

  return (
    <Container>
      <LetsGetStarted showGetStarted={formPosition}>
        <a>Welcome to </a>
        <span>WhatsApp 2</span>
        <a className="slogan">The next era of communication</a>

        <Button onClick={handleGetStarted}>Let's get started</Button>
        <a className="have-an-account" href="/whatsapp-two/#/login">
          I already have an account
        </a>
        <Steps>
          <div style={{ opacity: formPosition == 0 ? "1" : "0.5" }}></div>
          <div style={{ opacity: formPosition == 1 ? "1" : "0.5" }}></div>
          <div style={{ opacity: formPosition == 2 ? "1" : "0.5" }}></div>
        </Steps>
      </LetsGetStarted>

      <Form style={{ display: formPosition == 0 ? "none" : "flex" }}>
        <Input style={{ display: formPosition == 1 ? "block" : "none" }}>
          <TextField
            label="Username"
            type="text"
            variant="filled"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Input>
        <Input style={{ display: formPosition == 2 ? "block" : "none" }}>
          <TextField
            label="Password"
            type="password"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Input>
        <Buttons>
          <Button
            onClick={() => setFormPosition(formPosition - 1)}
            className="moveBack"
            style={{ background: "#F4F4F4", color: "black" }}
          >
            Go back
          </Button>
          <Button
            onClick={handleGetStarted}
            disabled={disabledBtn}
            style={{ opacity: disabledBtn ? "0.5" : "1" }}
          >
            {renderSwitch()}
          </Button>
        </Buttons>
        <Steps>
          <div style={{ opacity: formPosition == 0 ? "1" : "0.5" }}></div>
          <div style={{ opacity: formPosition == 1 ? "1" : "0.5" }}></div>
          <div style={{ opacity: formPosition == 2 ? "1" : "0.5" }}></div>
        </Steps>
      </Form>
    </Container>
  );
};

export default GetStarted;
