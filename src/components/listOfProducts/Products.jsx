import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

import Product from "./Product"

const Container = styled.div`
  width: 100vw;

  @media (min-width: 600px) {
    background: ${({ theme }) => theme.colors.slightlyDarkSecond};
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

const Products = ({ products }) => {
  return (
    <Container>
      {products.map((product) =>
        <Product
          key={product.id}
          name={product.name}
          description={product.description}
          image={product.image}
        />
      )}
    </Container>
  );
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }))
}

Products.defaultProps = {
  products: []
}


export default Products;

