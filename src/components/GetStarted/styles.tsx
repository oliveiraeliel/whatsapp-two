import styled from "styled-components";

interface GetStartedProps {
  showGetStarted: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LetsGetStarted = styled(Container)`
  display: ${(props: GetStartedProps) =>
    props.showGetStarted ? "flex" : "none"};
  a {
    font-size: 1.5rem;
    font-weight: 300;
  }
  .have-an-account {
    font-size: 1rem;
    color: black;
    font-weight: small;
    margin: 0.5rem 0;

    &:hover {
      opacity: 0.8;
    }
  }
  .slogan {
    font-size: 0.9rem;
    font-weight: small;
    font-style: italic;
  }

  span {
    font-size: 3.5rem;
    font-weight: 800;
  }
`;

export const Input = styled.div`
  input {
    width: 80vw;
    max-width: 400px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 350px;
  text-align: center;

  .moveBack {
    flex: 1;
  }
  .moveOn {
    flex: 2;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 3rem;
  outline: none;
  border: none;
  font-size: medium;
  border-radius: 0.5rem;
  margin: 1rem;

  &:hover {
    opacity: 0.7;
  }
`;

export const Form = styled(Container)`
  display: flex;
`;

export const Steps = styled.div`
  position: relative;
  /* flex: 1; */
  display: flex;
  flex-direction: row;
  margin: 2rem;
  div {
    background: #000000;
    opacity: 0.5;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0.5rem;
  }
`;
