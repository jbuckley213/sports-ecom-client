import styled, { css } from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.2);
    transform: translate(0px, -10px) scale(1.1);
  }
`;

export const LoginForm = styled.form`
  ${() =>
    css`
    width:50%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  width: 80vw;

  input{
  width: 70%;
  height: auto;
  margin:20px;
  padding:2px 2px;
`};
`;
export const ReturnButton = styled.button`
  width: 20%;
  position: relative;
  top: 0;
  right: 250px;
  border-radius: 25px;
  background-color: blueviolet;
`;

export const LoginButton = styled.button`
  width: 50%;

  border-radius: 25px;
  background-color: blueviolet;
`;
