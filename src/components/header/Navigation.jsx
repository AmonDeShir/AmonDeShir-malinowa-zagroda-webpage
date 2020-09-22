import React from 'react';
import styled from "styled-components";


const Background = styled.nav`
  width: 100vw;
  height: 35px;

  background: ${({theme}) => theme.colors.main};

  ul {
    width: 100vw;
    margin: 0px;
    padding: 0px;

    display: flex;
  }

  li {
    flex: 1;

    line-height: 35px;
    text-align: center;
    list-style: none;
    font-weight: 300;
    font-size: ${({theme}) => theme.fonts.phone.l};
  }
`;


const Navigation = () => (
  <Background>
    <ul>
      <li>O nas</li>
      <li>Kontakt</li>
      <li>Produkty</li>
      <li>Galeria</li>
    </ul>
  </Background>
)

export default Navigation;