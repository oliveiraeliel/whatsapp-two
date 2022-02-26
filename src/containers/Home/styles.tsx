import styled from "styled-components";
import * as styles from "../GetStarted/styles";

export const Container = styled(styles.Container)`
  flex-direction: row;
`;

export const MessageField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* flex-wrap: nowrap; */
  flex: 2;
  /* background-color: black; */
  width: 100%;
  height: 100%;
  @media (max-width: 756px) {
    display: none;
  }
`;

export const ContactsField = styled.div`
  flex: 1;
  /* background-color: yellow; */
  width: 100%;
  height: 100%;
  margin: 0.1rem;
  height: 100vh;

  h1 {
    margin: 0;
  }
  .slogan {
    text-align: center;
    margin: 2rem 0 0 0;
  }

  @media (max-width: 756px) {
    flex: 1;
  }
`;

export const InsertTextField = styled.div`
  /* position: fixed; */
  background: var(--main-color);
  height: 50px;
  width: 100%;
  /* bottom: 0; */
  .fixedBar {
    position: fixed;
    -webkit-backface-visibility: hidden;
    /* bottom: 0; */
  }
`;

export const SearchBar = styled.div`
  position: block;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 10vh;
  text-align: center;
  input {
    width: 80%;
    height: 1.5rem;
    border-radius: 0.5rem;
    margin: 0.5rem;
    font-size: 1.2rem;
    font-weight: 300;
    padding: 5px;
  }
`;

export const Scroll = styled.div`
  overflow-y: scroll;
  margin: 0.1rem;
  height: 100vh;

  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    opacity: 0.2;
    background: #000000;
    border-radius: 10px;
  }
`;
