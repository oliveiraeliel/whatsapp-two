import styled from "styled-components";
import * as styles from "../GetStarted/styles";

export const Container = styled(styles.Container)`
  span {
    font-size: 3.5rem;
    font-weight: 800;
    margin: 0.5rem;
  }
  a {
    font-size: 1.5rem;
    font-weight: 300;
    font-size: 1rem;
    color: black;
    font-weight: small;
    margin: 0.5rem 0;
    &:hover {
      opacity: 0.8;
    }
  }
`;
export const Button = styled(styles.Button)``;
export const Input = styled(styles.Input)`
  margin: 0.5rem;
`;
export const Steps = styled(styles.Steps)``;
