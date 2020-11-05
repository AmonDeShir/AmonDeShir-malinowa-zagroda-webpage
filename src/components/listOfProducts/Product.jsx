import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Text, Title } from "../textblock/Textblock";

const Container = styled.div`
  width: 100vw;
  height: 150px;
  display: flex;
  
  @media (min-width: 600px) {
    box-shadow: -10px 0px 10px -1px rgba(0, 0, 0, 0.25), 10px 4px 10px -1px rgba(0, 0, 0, 0.25);  
    width: 600px;
    margin-left: calc(50vw - 300px);
  }

  @media (min-width: 900px) {
    width: calc(50vw - 22.5px);
    max-width: 600px;
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.4);
    margin-left: 0;
  }
  `;

const Image = styled.div`
  width: 180px;
  height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.5);

  @media (min-width: 900px) {
    box-shadow: none;
  }
`;

const StyledTextContainer = styled.div`
  width: calc(100vw - 180px);
  height: 150px;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.5);
  background: ${({ theme }) => theme.colors.primary};
  text-align: center;

  @media (min-width: 600px) {
    width: 420px;
  }

  @media (min-width: 900px) {
    width: calc(50vw - 202.5px);
    max-width: 420px;
    box-shadow: none;

    position: relative;
    z-index: 1;
  }
`;

const Product = ({ image, name, description }) => (
  <Container>
    <Image image={image} />
    <StyledTextContainer>
      <Title>{name}</Title>
      <Text>{description}</Text>
    </StyledTextContainer>
  </Container>
);

Product.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
}

Product.defaultProps = {
  image: "",
  name: "",
  description: ""
}

export default Product;