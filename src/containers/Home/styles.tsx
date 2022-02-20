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
  /* margin: 1rem; */

  .scroll {
    overflow-y: scroll;
    margin: 0.1rem;
    height: 100vh;
  }
  @media (max-width: 756px) {
    flex: 1;
  }
`;

export const ContactsField = styled.div`
  flex: 1;
  /* background-color: yellow; */
  width: 100%;
  height: 100%;
  margin: 1rem;

  @media (max-width: 756px) {
    display: none;
    /* flex: 0; */
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
