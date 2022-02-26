import React, { useState, useEffect, useRef } from "react";
import { Message, Contact } from "../../components";
import { TextField } from "@mui/material";

import {
  Container,
  ContactsField,
  MessageField,
  InsertTextField,
  SearchBar,
  Scroll,
} from "./styles";

import * as messages from "./messages.json";

const Home = () => {
  const scrollRef = useRef<HTMLInputElement>(null);

  const [searchUser, setSearchUser] = useState<string>("");

  useEffect(() => {
    console.log(searchUser);
  }, [searchUser]);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll =
        scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      scrollRef.current.scrollTo(0, scroll);
    }
  }, []);

  const loadMessages = messages.default.map((message, index) => {
    return (
      <div>
        <Message
          text={message.text}
          name={message.name}
          date={message.date}
          alignLeft={message.name == "Eliel" ? true : false}
          key={index}
        />
      </div>
    );
  });

  return (
    <Container>
      <ContactsField>
        <div className="slogan">
          <h1>WhatsApp 2</h1>
          <span>The next era of communication</span>
        </div>
        <SearchBar>
          <input
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
          ></input>
        </SearchBar>
        <Scroll>
          <Contact
            username="oliveiraeliel"
            lastMessage="Oi, tudo bem? Estou entrando em contato para informar que"
            onClick={() => console.log("adsa")}
          />
        </Scroll>
      </ContactsField>
      <MessageField>
        <Scroll ref={scrollRef}>
          {messages.default.map((message, index) => {
            return (
              <div>
                <Message
                  text={message.text}
                  name={message.name == "Eliel" ? "You" : message.name}
                  date={message.date}
                  alignLeft={message.name != "Eliel" ? true : false}
                  key={index}
                />
              </div>
            );
          })}
        </Scroll>
        <div className="fixedBar">
          <InsertTextField></InsertTextField>
        </div>
      </MessageField>
    </Container>
  );
};

export default Home;
