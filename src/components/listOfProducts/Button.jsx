import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import goatIcon from "../../assets/images/listOfProducts/goatIcon.svg"
import cowIcon from "../../assets/images/listOfProducts/cowIcon.svg"

const Image = styled.div`
  width: 160px;
  height: 160px;
  background: center / contain no-repeat url(${(props) => props.image});
`;

const Background = styled.div`
  height: 180px;
  width: 50vw;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background: ${({theme, darkSecond}) => darkSecond ? theme.colors.darkSecond : theme.colors.primary};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

const Button = ({clicked, isGoat, onClick}) => (
  <Background darkSecond={clicked} onClick={onClick}>
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