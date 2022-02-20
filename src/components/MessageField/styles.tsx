import styled from "styled-components";

interface IAlignLeft {
  alignLeft: boolean;
}
export const Body = styled.div`
  width: 100%;
  display: inline-block;
`;

export const Container = styled.div`
  /* position: relative; */
  background-color: var(--main-color);
  max-width: 75%;
  /* width: 50%; */
  min-width: 150px;
  padding: 0 1rem;
  color: white;
  float: ${(props: IAlignLeft) => (props.alignLeft ? "left" : "right")};
  margin: 0.2rem 1rem;
  border-radius: 1rem;
`;

export const Text = styled.a`
  font-size: 1.05rem;
  font-weight: 300;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: end;
  vertical-align: middle;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  font-weight: 200;
`;

export const Name = styled.h1`
  margin: 1rem 0 0.5rem;
  font-size: 1.05rem;
`;
