import React, { useEffect, useRef } from "react";
import { Message } from "../../components";

import {
  Container,
  ContactsField,
  MessageField,
  InsertTextField,
} from "./styles";

import * as messages from "./messages.json";

const Home = () => {
  const scrollRef = useRef<HTMLInputElement>(null);

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
      <ContactsField></ContactsField>
      <MessageField>
        <div className="scroll" ref={scrollRef}>
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
        </div>
        <div className="fixedBar">
          <InsertTextField></InsertTextField>
        </div>
      </MessageField>
    </Container>
  );
};

export default Home;
