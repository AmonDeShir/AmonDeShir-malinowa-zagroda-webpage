import React from "react"
import CircleButton from "./CircleButton"
import styled from "styled-components";
import NElementsArray from "../../../utilities/NElementsArray";
import PropTypes from "prop-types";

const StyledList = styled.ul`
  display: flex;
  position: absolute;

  bottom: 5px; 
  left: 5px;
  margin: 0;
  padding: 0;
  
  height: 26px;
  width: ${({elementsCount}) => `calc(25px * ${elementsCount})`};
`;

const CircleButtonList = ({elementsCount, selectedElementId, onButtonClick}) => {
  return (
    <StyledList elementsCount={elementsCount}>
      {NElementsArray(elementsCount).map((id) => 
        <CircleButton 
          key={id} 
          selected={id === selectedElementId} 
          onClick={ () => onButtonClick(id)} 
        />
      )}
    </StyledList>
  )
}

CircleButtonList.propTypes = {
  elementsCount: PropTypes.number,
  selectedElementId: PropTypes.number,
  onButtonClick: PropTypes.func
}

CircleButtonList.defaultProps = {
  elementsCount: 4,
  selectedElementId: 0,
  onButtonClick: () => {}
}

export default CircleButtonList; 