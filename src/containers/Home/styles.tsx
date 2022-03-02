import styled from "styled-components";
import * as styles from "../GetStarted/styles";

export const Container = styled(styles.Container)`
  flex-direction: row;
  background-color: var(--secondary-color);
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    height: 15vh;
  }

  @media (max-width: 756px) {
    flex: 1;
  }
`;

export const InsertTextField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  background: var(--terciary-color);
  height: 50px;
  width: 100%;
  /* bottom: 0; */
  .fixedBar {
    position: fixed;
    -webkit-backface-visibility: hidden;
    /* bottom: 0; */
  }

  input {
    height: 50%;
    width: 80%;
    border: none;
    border-radius: 5px;
    font-size: 12pt;
    font-weight: 400;
    padding: 5px;
    background-color: var(--secondary-color);
    color: white;

    &:focus {
      outline: none;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 25px;
    width: 50px;
    height: 50%;

    &:hover {
      color: black;
    }
  }
`;

export const SearchBar = styled.div`
  position: block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vh;
  text-align: center;
  background-color: var(--terciary-color);

  input {
    width: 80%;
    height: 1.5rem;
    border-radius: 0.5rem;
    margin: 0.5rem;
    font-size: 1.2rem;
    font-weight: 300;
    padding: 8px;
    background-color: var(--secondary-color);
    border: none;
    color: white;
    font-size: 14pt;

    &:focus {
      outline: none;
    }
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

export const MessageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10vh;
  background-color: var(--terciary-color);
  color: white;
  padding: 0 1rem;
  h1 {
    margin: 0 0.2rem;
  }
`;
