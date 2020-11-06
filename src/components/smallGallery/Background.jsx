import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 71vw;

  @media (orientation: landscape) and (min-width: 140.85vmin){
    height: 100vmin;
  }

  @media (min-width: 600px) {
    height: 426px;
  }

  @media (min-width: 1000px) {
    height: 600px;
  }
`;

const SideImage = styled.div`
  display: none;
  height: 100%;
  width: calc(50vw - 70.425vmin);
  background: center / 140.85vmin 100vmin no-repeat url(${(props) => props.image});

  @media (orientation: landscape), (min-width: 600px) {
    display: block;
  }

  @media (min-width: 600px) {
    background-size: 600px 426px;
    width: calc(50vw - 300px);
  }

  @media (min-width: 1000px) {
    background-size: 845px 600px;
    width: calc(50vw - 422.5px);
  }
`;

const LeftSideImage = styled(SideImage)`
  background-position: calc( -140.80vmin + (50vw - 70.425vmin)) 0;

  @media (min-width: 600px) {
    background-position: calc( -600px + (50vw - 300px)) 0;
  }

  @media (min-width: 1000px) {
    background-position: calc( -845px + (50vw - 300px)) 0;
  }
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: center / cover no-repeat url(${(props) => props.image});


  @media (orientation: landscape), (min-width: 600px) {
    box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.25);  
  }

  @media (orientation: landscape) and (min-width: 140.85vmin){
    width: 140.85vmin;
    height: 100vmin;
  }

  @media (min-width: 600px) {
    width: 600px;
    height: 426px;
  }

  @media (min-width: 1000px) {
    height: 600px;
    width: 845px;
  }
`;

const Background = ({ prevImage, image, nextImage, children }) => (
  <Container>
    <LeftSideImage image={prevImage} />
    <Image image={image}>
      {children}
    </Image>
    <SideImage image={nextImage} />
  </Container>
);

Background.propTypes = {
  prevImage: PropTypes.string,
  image: PropTypes.string,
  nextImage: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

Background.defaultProps = {
  prevImage: "",
  image: "",
  nextImage: ""
}

export default Background;