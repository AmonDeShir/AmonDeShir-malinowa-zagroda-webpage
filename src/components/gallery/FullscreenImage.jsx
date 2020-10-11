import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: rgba(0, 0, 0, 0.75);
`;

const FullscreenImage = ({image, show}) => {
  return show ? (
    <Background>
      <img alt=" " src={image} />
    </Background>
  ) : (
    <></>
  );
}

FullscreenImage.propTypes = {
  image: PropTypes.string,
  show: PropTypes.bool,
}

FullscreenImage.defaultProps = {
  image: "",
  show: false,
}

export default FullscreenImage;