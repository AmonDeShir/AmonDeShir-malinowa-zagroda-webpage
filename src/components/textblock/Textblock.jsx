import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const Background = styled.div`
  position: relative;
  z-index: 1;
  width: 100vw;
  height: ${({ small }) => small ? "120px" : "200px"};
  background: ${({ theme }) => theme.colors.primary};
  text-align: center;

  ${(props) => props.inverShadows ?
    css`box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.5);`
    :
    css`box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5), 0px -2px 4px rgba(0, 0, 0, 0.5);`
  };

  @media (min-width: 700px), (orientation: landscape) {
    background: ${({ theme }) => theme.colors.slightlyDarkSecond};
    height: ${({ small }) => small ? "120px" : "150px"};
  }

  @media (min-width: 1000px) {
    height: ${({ small }) => small ? "150px" : "200px"};
  }

`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  @media (min-width: 600px), (orientation: landscape) {
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: -10px 0px 10px -1px rgba(0, 0, 0, 0.25), 10px 4px 10px -1px rgba(0, 0, 0, 0.25);  
  }

  @media (orientation: landscape) and (min-width: 140.85vmin){
    max-width: 140.85vmin;
    margin-left: calc(50vw - 70.425vmin);
  }

  @media (min-width: 600px) {
    max-width: 600px;
    margin-left: calc(50vw - 300px);
  }

  @media (min-width: 1000px) {
    max-width: 845px;
    margin-left: calc(50vw - 422.5px);
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
  font-size: ${({ theme }) => theme.fonts.xl};
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 50px - 10px);
  padding: 0 20px 0 20px;
  font-style: normal;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fonts.m};

  @media (min-width: 1000px) {
    padding: 0 50px 0 50px;
    height: ${({small}) => small ? "calc(100% - 50px - 25px)" : "calc(100% - 50px - 35px)"};
  }
`;

const Textblock = ({ title, text, small, inverShadows }) => (
  <Background inverShadows={inverShadows} small={small}>
    <Container>
      <Title>{title}</Title>
      <Text small={small}>{text}</Text>
    </Container>
  </Background>
);

Textblock.propTypes = {
  title: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  small: PropTypes.bool,
  inverShadows: PropTypes.bool
}

Textblock.defaultProps = {
  title: "",
  small: false,
}

export default Textblock;