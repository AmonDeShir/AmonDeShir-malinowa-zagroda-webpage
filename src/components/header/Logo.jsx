import React from 'react';
import styled from "styled-components";

import goat from "../../assets/images/header/goat.jpg";
import logo from "../../assets/images/logo.svg";


const Background = styled.div`
  width: 100vw;
  height: 120px;

  background-image: url("${goat}");
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: ${({theme}) => theme.shadow.default};
`;

const LogoImage = styled.div`
  width: 153.6px;
  height: 64.8px;

  background-image: url("${logo}");
  background-size: cover;
`;

const Logo = () => (
  <Background>
    <LogoImage/>
  </Background>
);

export default Logo