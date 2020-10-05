import React from "react"
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: ${({height}) => height ? height : "180px"};
  background: ${({theme}) => theme.colors.lightMain};

  text-align: center;
`;

const Title = styled.h2`
  padding: 0;
  margin: 0;

  height: 50px;
  width: 100%;
  line-height: 50px;

  font-style: normal;
  font-weight: 300;
  font-size: ${({theme}) => theme.fonts.phone.xl};
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-style: normal;
  font-weight: 300;
  font-size: ${({theme}) => theme.fonts.phone.m};

  width: 100%;
  height: calc(100% - 50px - 25px);

  padding: 0 10px 0 10px;
`;

const Textblock = ({ title, text, height }) => (
  <Container height={height}>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </Container>
);

export default Textblock;