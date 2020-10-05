import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import goatIcon from "./../../assets/images/listOfProducts/goatIcon.svg"
import cowIcon from "./../../assets/images/listOfProducts/cowIcon.svg"

const Image = styled.div`
  width: 160px;
  height: 160px;

  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
`;

const Background = styled.div`
  height: 180px;
  width: 50vw;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: ${({theme}) => theme.shadow.topInset};
  background: ${({theme, dark}) => dark ? theme.colors.darkMain : theme.colors.lightMain};
`;

const Button = ({clicked, isGoat, onClick}) => (
  <Background dark={clicked} onClick={onClick}>
    <Image image={isGoat ? goatIcon : cowIcon}/>
  </Background>
);


Button.propTypes = {
  clicked: PropTypes.bool,
  isGoat: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  clicked: false,
  isGoat: false,
  onClick: () => {}
}


export default Button;