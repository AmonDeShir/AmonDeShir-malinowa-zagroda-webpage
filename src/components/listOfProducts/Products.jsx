import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

import Product from "./Product"

const Container = styled.div`
  width: 100vw;
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

Product.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }))
}

Product.defaultProps = {
  products: []
}


export default Products;

