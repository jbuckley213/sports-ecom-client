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
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.image}); */
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
