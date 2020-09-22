import styled from "styled-components"

const CircleButton = styled.li`
  width: 20px;
  height: 20px;
  
  margin-right: 5px;

  background-color: ${({theme, selected}) => selected ? theme.colors.lightMain : theme.colors.darkMain};
  border-radius: 50%;
  border-width: 1.5px;
  border-color: ${({theme}) => theme.colors.lightMain};
  border-style: solid;

  list-style: none;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) ${({selected}) => selected ? "" : ", inset 0px 4px 4px rgba(0, 0, 0, 0.52);"};
`;

export default CircleButton;
