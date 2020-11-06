import styled from "styled-components"

const CircleButton = styled.li`
  width: 20px;
  height: 20px;
  margin-right: 5px;

  border: 1.5px solid ${({theme}) => theme.colors.primary};
  border-radius: 50%;

  list-style: none;

  background-color: ${({theme, selected}) => selected ? theme.colors.primary : theme.colors.darkSecond};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) ${({selected}) => selected ? "" : ", inset 0px 4px 4px rgba(0, 0, 0, 0.52);"};

  cursor: pointer;
`;

export default CircleButton;
