import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const Background = styled.div`
  position: relative;
  z-index: 1;
  width: 100vw;
  height: ${({ height }) => height ? height : "180px"};
  background: ${({ theme }) => theme.colors.lightMain};
  text-align: center;

  ${(props) => props.inverShadows ?
    css`box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.5);`
    :
    css`box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5), 0px -2px 4px rgba(0, 0, 0, 0.5);`
  };

  @media (max-width: 375px) and (orientation: portrait) {
    height: ${({ height }) => height ? height : "200px"};
  }

  @media (min-width: 700px), (orientation: landscape) {
    background: ${({ theme }) => theme.colors.slightlyDarkMain};
    height: ${({ height }) => height ? height : "160px"};
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 700px), (orientation: landscape) {
    max-width: 140.85vmin;
    margin-left: calc(50vw - 70.425vmin);
    background: ${({ theme }) => theme.colors.lightMain};
    box-shadow: -10px 0px 10px -1px rgba(0, 0, 0, 0.25), 10px 4px 10px -1px rgba(0, 0, 0, 0.25);  
  }
`;

export const Title = styled.h2`
  padding: 0;
  margin: 0;
  height: 50px;
  width: 100%;
  line-height: 50px;
  font-style: normal;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fonts.phone.xl};
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 50px - 25px);
  padding: 0 10px 0 10px;
  font-style: normal;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fonts.phone.m};
`;

const Textblock = ({ title, text, height, inverShadows }) => (
  <Background inverShadows={inverShadows} height={height}>
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  </Background>
);

Textblock.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  height: PropTypes.string,
  inverShadows: PropTypes.bool
}

Textblock.defaultProps = {
  title: "",
  text: "",
}

export default Textblock;