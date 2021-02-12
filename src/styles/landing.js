import styled, { css } from "styled-components";

export const LandingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: auto;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
`;

export const TitleHeader = styled.h1`
  color: white;

  @media (min-width: 1023px) {
    color: #444;
  }
`;

export const Info = styled.h1`
  color: white;

  @media (min-width: 1023px) {
    color: #444;
  }
`;

export const Divider = styled.p`
  background: #444;
  width: 100%;
  height: 2px;

  @media (min-width: 1023px) {
    color: #444;
  }
`;

export const ImageHeaderContainer = styled.div`
  padding: 10px;
  width: 100%;
  height: 70vh;
  margin-bottom: 10px;
  background: url(${(props) => props.image});
  /* background: linear-gradient(
      rgba(${(props) => props.color}, 0.5),
      rgba(${(props) => props.color}, 0.5)
    ),
    url(${(props) => props.image}); */
  background-size: cover;
  background-position: center;
  @media (min-width: 1023px) {
    clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%);
    width: 100%;
    border-radius: 0 0 50% 50%;
  }
`;

export const ImageContainer = styled.div`
  width: 350px;
  height: 350px;
  margin: 5px;

  background: linear-gradient(
      rgba(${(props) => props.color}, 0.5),
      rgba(${(props) => props.color}, 0.5)
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.2);
    transform: translate(0px, -10px) scale(1.1);
  }
`;

export const Title = styled.p`
  color: white;
  position: relative;
  top: 50%;
  text-transform: uppercase;
  letter-spacing: 8px;
  text-align: center;
`;

export const ShopButton = styled.button`
  border-radius: 50px;
  width: 200px;
  height: 60px;
  color: white;
  margin: 20px;
  font-size: 0.6rem;
  /* background-color: rgb(228, 103, 46); */
  background-color: rgb(226, 169, 146);
  padding: 20px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
  padding: 10px 5px;
  text-transform: uppercase;
  border: none;
  box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.4);
  transition: all ease-in-out 300ms;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const ImageProductContainer = styled.div`
  width: 350px;
  height: 350px;
  margin: 5px;
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.image}); */
  background: linear-gradient(
    rgba(${(props) => props.color}, 0.5),
    rgba(${(props) => props.color}, 0.5)
  );
  background-size: cover;
  background-position: center;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.2);
    transform: translate(0px, -10px) scale(1.1);
  }
  z-index: 4;

  img {
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
    z-index: 4;
  }
  p {
    position: relative;
    top: -50%;
    text-transform: uppercase;
    letter-spacing: 8px;
    text-align: center;
    color: white;
  }
`;

export const TestDiv = styled.div`
  width: 330px;
  height: 10px;
  z-index: ${(props) => props.zIndex};
  background: white;
  position: relative;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export const TestDivTwo = styled.div`
  width: 10px;
  height: 360px;
  z-index: ${(props) => props.zIndex};
  background: white;
  position: relative;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  margin: 0;
`;
