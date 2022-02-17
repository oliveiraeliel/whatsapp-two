import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
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
  const [showGetStarted, setShowGetStarted] = useState<boolean>(true);
  const [formPosition, setFormPosition] = useState<number>(0);

  const handleGetStarted = (value: boolean) => {
    setShowGetStarted(value);
    if (formPosition < 2) {
      setFormPosition(formPosition + 1);
      return;
    }
  };

  const goBack = () => {
    if (formPosition == 1) {
      setShowGetStarted(true);
    }
    setFormPosition(formPosition - 1);
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
      <LetsGetStarted showGetStarted={showGetStarted}>
        <a>Welcome to </a>
        <span>Whatsapp 2</span>
        <a className="slogan">The next era of communication</a>

        <Button onClick={() => handleGetStarted(false)}>
          Let's get started
        </Button>
        <a className="have-an-account" href="#">
          I have an account
        </a>
      </LetsGetStarted>

      <Form style={{ display: showGetStarted === true ? "none" : "flex" }}>
        <Input style={{ display: formPosition == 1 ? "block" : "none" }}>
          <TextField label="Username" type="text" variant="filled" />
        </Input>
        <Input style={{ display: formPosition == 2 ? "block" : "none" }}>
          <TextField label="Password" type="password" variant="filled" />
        </Input>
        <Buttons>
          <Button onClick={goBack} className="moveBack">
            Go back
          </Button>
          <Button onClick={() => handleGetStarted(false)} className="moveOn">
            {renderSwitch()}
          </Button>
        </Buttons>
      </Form>
      <Steps>
        <div style={{ opacity: formPosition == 0 ? "1" : "0.5" }}></div>
        <div style={{ opacity: formPosition == 1 ? "1" : "0.5" }}></div>
        <div style={{ opacity: formPosition == 2 ? "1" : "0.5" }}></div>
      </Steps>
    </Container>
  );
};

export default GetStarted;
