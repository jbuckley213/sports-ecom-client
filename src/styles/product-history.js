import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 10px 0;
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
    width:120px;

    @media (min-width:1023px){
      width:30%;
    }
img{
  width: 100%;
  height: auto;
`};
`;

export const TextContainer = styled.div`
  ${() =>
    css`
    width:120px;
    @media (min-width:1023px){
      width:40%;
    }
   
p{
  color:grey;
  width: 100%;
  height: auto;
`};
`;
