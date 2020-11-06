import React from "react"
import styled from "styled-components";
import PropTypes from "prop-types";
import CircleButton from "./CircleButton"
import NElementsArray from "../../../utilities/NElementsArray";

const StyledList = styled.ul`
  display: flex;
  position: absolute;

  width: ${({elementsCount}) => `calc(25px * ${elementsCount})`};
  height: 26px;

  bottom: 5px; 
  left: 5px;
  margin: 0;
  padding: 0;
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