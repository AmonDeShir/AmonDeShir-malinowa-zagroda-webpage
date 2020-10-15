import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 71vw;

  @media (orientation: landscape) {
    width: 100vw;
    height: 100vmin;
  }
`;

const SideImage = styled.div`
  display: none;
  background-image: url(${(props) => props.image});
  background-size: 140.85vmin 100vmin;
  background-repeat: no-repeat;
  filter: blur(3px);

  height: 100%;
  width: calc(50vw - 70.425vmin);
  transform: scale(1.05);
  z-index: -1;

  @media (orientation: landscape) {
    display: block;

    &:after, &:before {
      display: block;
    }
  }
`;

const LeftSideImage = styled(SideImage)`
  background-position: calc( -140.80 + (50vw - 70.425vmin)) 0;
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (orientation: landscape) {
    width: 140.85vmin;
    height: 100vmin;

    box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.25);  
  }
`;


const Background = ({ prevImage, image, nextImage, children}) => (
  <Container>
    <LeftSideImage image={prevImage} />
    <Image image={image}>
      {children}
    </Image>
    <SideImage image={nextImage} />
  </Container>
);

export default Background;