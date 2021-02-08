import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  width: 100px;
  height: 60px;
  color: white;
  font-size: 0.6rem;
  background-color: rgb(30, 30, 30);
  padding: 20px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
  color: white;
  padding: 10px 5px;
  text-transform: uppercase;
  border: none;
  box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.4);
  transition: all ease-in-out 300ms;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  div {
    margin: auto 0;
    cursor: pointer;
    font-size: 0.8rem;
  }

  &:hover {
    box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.2);
    transform: translate(0px, -10px) scale(1.1);
  }
`;
