import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Background = styled.nav`
  position: relative;
  z-index: 1;

  width: 100vw;
  height: 35px;

  background: ${({ theme }) => theme.colors.second};
  box-shadow: 0px 0px 4px 4px rgba(0,0,0,0.5);

 @media (min-width: 1000px) {
    height: 55px;
  } 

  ul {
    display: flex;
    width: 100vw;
    margin: 0;
    padding: 0;

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
      margin-left: calc(50% - 422.5px);
    }
  }

  li {
    flex: 1;
    list-style: none;
    text-align: center;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkSecond};
    }
  }
`;

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.white};
    line-height: 35px;
    text-decoration: none;
    font-weight: 300;
    font-size: ${({ theme }) => theme.fonts.l};
    user-select: none;

    @media (min-width: 1000px) {
      line-height: 55px;
      font-size: ${({ theme }) => theme.fonts.xl};
    } 

    :hover {
      cursor: pointer;
    }
`;


const Navigation = () => {

  useEffect(() => {
    scrollByAdress();
  })

  const scrollByAdress = () => {
    const href = window.location.href.split("/");
    const id = `#${href[href.length - 1]}`;

    if (id === "#")
      return;

    if (id !== "#products")
      scrollTo(id);
    else
      scrollTo(id, true);
  }

  const scrollTo = (selector, top) => {
    const element = document.querySelector(selector);
    const rect = element?.getBoundingClientRect();

    if (element === null)
      return

    if (top)
      scrollToTop(rect);
    else
      scrollToBottom(rect);
  }

  const scrollToBottom = (rect) => {
    let deltaHeight = window.innerHeight - rect.bottom;

    if (deltaHeight < 0)
      deltaHeight *= -1;

    window.scrollTo(window.scrollX, deltaHeight)
  }

  const scrollToTop = (rect) => {
    window.scrollTo(window.scrollX, rect.top)
  }

  return (
    <Background>
      <ul>
        <li>
          <StyledLink to="/about-us" onClick={() => scrollTo("#about-us")}>
            O nas
          </StyledLink>
        </li>

        <li>
          <StyledLink to="/contact" onClick={() => scrollTo("#contact")}>
            Kontakt
          </StyledLink>
        </li>

        <li>
          <StyledLink to="/products" onClick={() => scrollTo("#products", false)}>
            Produkty
          </StyledLink>
        </li>

        <li>
          <StyledLink to="/gallery">
            Galeria
          </StyledLink>
        </li>
      </ul>
    </Background>
  );
}
export default Navigation;