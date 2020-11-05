import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

import Product from "./Product"

const Background = styled.div`
  display: none;
  width: 100vw;
  background:  ${({theme}) => theme.colors.darkSecond};
  position: relative;
  z-index: -1;

  grid-template-columns: calc(50vw - 22.5px) calc(50vw - 22.5px);
  column-gap: 15px;
  row-gap: 15px;

  padding: 15px 0 15px 15px;
  box-shadow: inset 0px 2px 4px rgba(0,0,0,0.5);

  @media (min-width: 900px) {
    display: grid;
    background:  ${({theme}) => theme.colors.darkSecond};
  }

  @media (min-width: 1200px) {
    grid-template-columns: 600px 600px;
    padding-left: calc(50% - 600px - 15px);
  }
`;

const mixCategories = (categoryOne, categoryTwo) => {
  let result = [];
  const maxLenght = Math.max(categoryOne.length, categoryTwo.length);

  for(let i = 0; i < maxLenght; i++){
    if(categoryOne[i] !== undefined)
      result.push(categoryOne[i]);
      
    if(categoryTwo[i] !== undefined)
      result.push(categoryTwo[i]);
  }

  return result;
}

const TableOfProducts = ({categoryOne, categoryTwo}) => {
  return (
    <Background>
        {mixCategories(categoryOne, categoryTwo).map((product) =>
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
          />
        )}
    </Background>
  );
}

TableOfProducts.propTypes = {
  
  categoryOne: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })),
  
  categoryTwo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })),  
}

TableOfProducts.defaultProps = {
  categoryOne: [],
  categoryTwo: []
}


export default TableOfProducts;

