import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Background = styled.nav`
  width: 100vw;
  height: 35px;

  background: ${({ theme }) => theme.colors.main};

  ul {
    width: 100vw;
    margin: 0px;
    padding: 0px;
    display: flex;
  }

  li {
    flex: 1;
    list-style: none;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
    color: white;
    line-height: 35px;
    text-decoration: none;
    font-weight: 300;
    font-size: ${({ theme }) => theme.fonts.phone.l};
    user-select: none;

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

    console.log("done!");
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
      deltaHeight = deltaHeight * -1;

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