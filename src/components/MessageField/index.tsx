import React from "react";

import { Container, Text, Footer, Name, Body } from "./styles";

interface IMessage {
  name: string;
  text: string;
  date: string;
  alignLeft: boolean;
}

const Message = (props: IMessage) => {
  return (
    <Body>
      <Container alignLeft={props.alignLeft}>
        <Name>{props.name}</Name>
        <Text>{props.text}</Text>
        <Footer>{props.date}</Footer>
      </Container>
    </Body>
  );
};

export default Message;
