import React, { useState, useEffect, useRef } from "react";
import { Message, Contact } from "../../components";
import { TextField } from "@mui/material";
import { FaPaperPlane } from "react-icons/fa";
import { BsChevronDoubleLeft } from "react-icons/bs";
import {
  Container,
  ContactsField,
  MessageField,
  InsertTextField,
  SearchBar,
  Scroll,
  MessageHeader,
} from "./styles";

import * as messages from "./messages.json";

const Home = () => {
  const scrollRef = useRef<HTMLInputElement>(null);

  const [searchUser, setSearchUser] = useState<string>("");
  const [message, setMessage] = useState<string>("");

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

  const sendMessage = () => {
    console.log(message);
  };

  const contacts = () => {
    const contactsA: Array<string> = [];
    messages.default.map((m, index) => {
      if (contactsA.includes(m.name)) {
        return;
      }
      contactsA.push(m.name);
      console.log(contactsA);
    });
  };

  return (
    <Container>
      <ContactsField>
        <div className="slogan">
          <h1>WhatsApp 2</h1>
          <span>The next era of communication</span>
        </div>
        <SearchBar>
          <input
            placeholder="Search for someone here"
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                console.log(searchUser);
                return;
              }
            }}
          ></input>
        </SearchBar>
        <Scroll>
          {contacts()}
          <Contact
            username="oliveiraeliel"
            lastMessage="Oi, tudo bem? Estou entrando em contato para informar que"
            onClick={() => console.log("adsa")}
          />
          <Contact
            username="oliveiraeliel"
            lastMessage="Oi, tudo bem? Estou entrando em contato para informar que"
            onClick={() => console.log("adsa")}
          />
        </Scroll>
      </ContactsField>
      <MessageField>
        <MessageHeader>
          <a>
            <BsChevronDoubleLeft style={{ fontSize: "16pt" }} />
          </a>
          <h1>@username</h1>
        </MessageHeader>
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
          <InsertTextField>
            <input
              placeholder="Type your text here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                  return;
                }
              }}
            ></input>
            <a onClick={sendMessage}>
              <FaPaperPlane
                style={{ display: message == "" ? "none" : "block" }}
              />
            </a>
          </InsertTextField>
        </div>
      </MessageField>
    </Container>
  );
};

export default Home;
