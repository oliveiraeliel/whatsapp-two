import React from "react";

import { Body, Name, LastMassage } from "./styles";

interface IContact {
  username: string;
  lastMessage: string;
  onClick: () => void;
}

const Contact = (props: IContact) => {
  return (
    <Body onClick={props.onClick}>
      <Name>@{props.username}</Name>

      <LastMassage>
        {props.lastMessage.length < 20 ? props.lastMessage : `${props.lastMessage.substring(0, 25)}...`}
      </LastMassage>
    </Body>
  );
};

export default Contact;
