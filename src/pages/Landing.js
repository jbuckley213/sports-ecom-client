import React from "react";
import {
  LandingContainer,
  ImageHeaderContainer,
  ImageContainer,
  Title,
  TitleHeader,
  Header,
  Divider,
  Info,
} from "./../styles/landing";

function Landing() {
  return (
    <>
      <Header>
        <div className="header-info">
          <TitleHeader>Welcome To SportHub</TitleHeader>
          <Divider />
          <Info>Buy active gear at a reasonable price.</Info>
        </div>
        <ImageHeaderContainer image={"/hike.jpg"}>
          <h1 className="moblie-title">Welcome To SportHub</h1>
        </ImageHeaderContainer>
      </Header>{" "}
      <LandingContainer>
        <ImageContainer image="/swimmer.jpg" color="139, 168, 226">
          <Title>Best Prices</Title>
        </ImageContainer>
        <ImageContainer image="/men.jpg" color="226, 169, 146">
          <Title>For Men</Title>
        </ImageContainer>
        <ImageContainer image="/handstand.jpg" color="176, 227, 232">
          <Title>For Women</Title>
        </ImageContainer>
        <ImageContainer image="/fitness.jpg" color="190, 216, 165">
          <Title>For Fitness</Title>
        </ImageContainer>
      </LandingContainer>
    </>
  );
}

export default Landing;
