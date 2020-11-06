import React from "react"
import Iframe from "react-iframe";
import styled from "styled-components"

const StyledIFrame = styled(Iframe)`
  width: 100vw;
  height: 100vmin;
  border-width: 0px;

  @media (min-width: 1000px) {
    height: calc(100vh - 120px);
  }

`;

const Map = () => (
  <StyledIFrame
    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16097.904421088238!2d15.837919967136793!3d51.481240550617756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f5068d97ee203%3A0x343f4c9fd460068d!2sGospodarstwo%20Ekologiczne%20Malinowa%20Zagroda!5e1!3m2!1spl!2spl!4v1601875392494!5m2!1spl!2spl"
  />
);

export default Map;