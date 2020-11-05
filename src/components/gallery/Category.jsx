import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types";

import menuIcon from "../../assets/images/gallery/menu2.svg";



const Background = styled.div`
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 100px;
  box-shadow: 0px 0px 4px 4px rgba(0,0,0,0.5);

  @media (min-width: 700px), (orientation: landscape) {
    background: ${({ theme }) => theme.colors.slightlyDarkSecond};
  }
`;

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  padding: 20px 10px 20px 10px;
  background: ${({ theme }) => theme.colors.second};

  &:after {
    position: absolute;
    content: " ";

    height: 30px;
    width: 30px;

    background-image: url(${menuIcon});
    background-repeat: no-repeat;
    background-size: cover;

    top: 35px;
    right: 35px; 
  }

  @media (min-width: 600px), (orientation: landscape) {
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: -10px 0px 10px -1px rgba(0, 0, 0, 0.25), 10px 4px 10px -1px rgba(0, 0, 0, 0.25);  
  }

  @media (orientation: landscape) and (min-width: 140.85vmin){
    max-width: 140.85vmin;
    margin-left: calc(50vw - 70.425vmin);
    padding: 20px;
  }

  @media (min-width: 600px) {
    max-width: 600px;
    margin-left: calc(50vw - 300px);
    padding: 20px;
  }

  @media (min-width: 1000px) {
    max-width: 845px;
    margin-left: calc(50vw - 422.5px);
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 60px;

  font-size: ${({ theme }) => theme.fonts.xl};
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  border-width: 0;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
  appearance: none;

  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1), inset 0px -4px 4px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;    
  }
`;

const Category = ({ items, onChange }) => {
  const [value, setValue] = useState(0)

  const handleChange = (event) => {
    const value = event.target.value;

    setValue(value);
    onChange(value);
  }

  return (
    <Background>
      <Container>
        <StyledSelect value={value} onChange={handleChange}>
          {items.map(({ id, value }) =>
            <option key={id} value={id}>{value}</option>
          )}
        </StyledSelect>
      </Container>
    </Background>
  )
};

Category.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string
  })),
  onChange: PropTypes.func
}

Category.defaultProps = {
  items: [],
  onChange: () => { }
}

export default Category;