import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"

import closeIcon from "../../assets/images/gallery/close-button.svg"
import arrowIcon from "../../assets/images/gallery/menu2.svg";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: rgba(0, 0, 0, 0.75);

`;

const Icon = styled.div`
  position: fixed;
  
  height: 30px;
  width: 30px;
  
  background-repeat: no-repeat;
  background-size: cover;
`;

const LeftArrow = styled(Icon)`
  background-image: url(${arrowIcon});

  top: calc(50vh - 15px);
  left: 10px; 
  transform: rotate(90deg);
`;

const RightArrow = styled(Icon)`
  background-image: url(${arrowIcon});

  top: calc(50vh - 15px);
  right: 10px; 
  transform: rotate(-90deg);
`;

const CloseButton = styled(Icon)`
  background-image: url(${closeIcon});

  top: 10px;
  right: 10px;
`;


const FullscreenImage = ({ image, show, onLeftArrowClick, onRightArrowClick, onCloseButtonClick }) => {

  return show ? (
    <Background>
      <img alt=" " src={image} />
      <LeftArrow onClick={onLeftArrowClick} />
      <RightArrow onClick={onRightArrowClick} />
      <CloseButton onClick={onCloseButtonClick} />
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