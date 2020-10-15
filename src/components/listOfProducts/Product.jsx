import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

import { Background as TextContainer, Text, Title } from "../textblock/Textblock"

const Container = styled.div`
  width: 100vw;
  height: 150px;

  display: flex;
`;

const Image = styled.div`
  height: 150px;
  width: 180px;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});

  box-shadow: ${({theme}) => theme.shadow.topInset};
`;

const StyledTextContainer = styled(TextContainer)`
  width: calc(100vw - 180px);
  height: 150px;

  box-shadow: ${({theme}) => theme.shadow.less.topInset};
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