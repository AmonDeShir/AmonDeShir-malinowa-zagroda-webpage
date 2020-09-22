import React from "react"
import CircleButton from "./CircleButton"
import styled from "styled-components";
import NElementsArray from "../../../utilities/NElementsArray";


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

const CircleButtonList = ({elementsCount, selectedElementId, onCircleButtonClickHandler}) => {
  return (
    <StyledList elementsCount={elementsCount}>
      {NElementsArray(elementsCount).map((id) => 
        <CircleButton 
          key={id} 
          selected={id === selectedElementId} 
          onClick={ () => onCircleButtonClickHandler(id)} 
        />
      )}
    </StyledList>
  )
}

export default CircleButtonList; 