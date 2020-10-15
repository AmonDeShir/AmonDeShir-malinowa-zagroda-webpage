import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  width: 100vw;
  height: 50px;

  background: ${({theme}) => theme.colors.main};

  text-align: center;
  font-style: normal;
  font-weight: 300;
  font-size: ${({theme}) => theme.fonts.phone.xl};
  line-height: 50px;
`;

const TitleBar = () => (
  <Bar>Produkty</Bar>
);

export default TitleBar;