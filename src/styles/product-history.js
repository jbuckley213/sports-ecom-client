import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  &:hover {
    box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.2);
    transform: translate(0px, -10px) scale(1.1);
  }
`;

export const ImageContainer = styled.div`
  ${() =>
    css`
    width:50%;
img{
  width: 30%;
  height: auto;
`};
`;

export const TextContainer = styled.div`
  ${() =>
    css`
    width:50%;
p{
  width: 100%;
  height: auto;
`};
`;
