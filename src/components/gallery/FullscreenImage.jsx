import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"

import closeIcon from "../../assets/images/gallery/close-button.svg"
import arrowIcon from "../../assets/images/gallery/menu2.svg";

const Background = styled.div`
  position: fixed;
  z-index: 2;
  
  top: 0;
  left: 0;
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
  top: calc(50vh - 15px);
  left: 10px; 
  transform: rotate(90deg);

  background-image: url(${arrowIcon});
`;

const RightArrow = styled(Icon)`
  top: calc(50vh - 15px);
  right: 10px; 
  transform: rotate(-90deg);

  background-image: url(${arrowIcon});
`;

const CloseButton = styled(Icon)`
  top: 10px;
  right: 10px;

  background-image: url(${closeIcon});
`;

const FullscreenImage = ({ image, show, onLeftArrowClick, onRightArrowClick, onCloseButtonClick}) => {
  return show ? (
    <Background>
      <img alt=" " src={image}  />
      <LeftArrow onClick={onLeftArrowClick} />
      <RightArrow onClick={onRightArrowClick} />
      <CloseButton onClick={onCloseButtonClick}/>
    </Background>
  ) : (
    <></>
  );
}

FullscreenImage.propTypes = {
  image: PropTypes.string,
  show: PropTypes.bool,
  onLeftArrowClick: PropTypes.func,
  onRightArrowClick: PropTypes.func,
  onCloseButtonClick: PropTypes.func,
}

FullscreenImage.defaultProps = {
  image: "",
  show: false,
  onLeftArrowClick: () => {},
  onRightArrowClick: () => {},
  onCloseButtonClick: () => {},
}

export default FullscreenImage;