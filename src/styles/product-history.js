import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 10px 0;
  display: flex;
`;

export const ImageContainer = styled.div`
  ${() =>
    css`
    width:120px;

    @media (min-width:1023px){
      width:100px;
    }
img{
  width: 100%;
  height: auto;
`};
`;

export const TextContainer = styled.div`
  ${() =>
    css`
    width:200px;
    
    justify-content:space-around;
    @media (min-width:1023px){
      width:400px;
      display:flex;
      justify-content:space-evenly;
      margin:0 100px;
    }
   h5{
     font-size:1.1rem;
   }
p{
  color:grey;
  width: 100%;
  height: auto;
`};
`;

export const DateContainer = styled.div`
  background: white;
  width: 80%;
  margin: 20px auto;
  border-radius: 25px;
  padding: 30px;
`;
