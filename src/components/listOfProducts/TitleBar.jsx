import React from "react";
import styled, {css} from "styled-components";

import goatIcon from "../../assets/images/listOfProducts/goatIcon.svg"
import cowIcon from "../../assets/images/listOfProducts/cowIcon.svg"


const Bar = styled.div`
  width: 100vw;
  height: 50px;

  text-align: center;
  font-style: normal;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fonts.xl};
  line-height: 50px;

  background: ${({ theme }) => theme.colors.second};

  @media (min-width: 900px) {
   height: 70px;
   font-weight: 500;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  
  @media (min-width: 900px) {
    position: relative;
    max-width: 600px;
    margin-left: calc(50% - 300px);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1000px) {
    max-width: 700px;
    margin-left: calc(50% - 350px);
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin: 10px;

  background: center / cover no-repeat url(${(props) => props.icon});  
`;

const TextIcon = styled.div`
  position: absolute;
  width: 130px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  font-weight: 300;
  font-size: ${({ theme }) => theme.fonts.l};

  ${({right}) => right ? 
    css`right: 0;`
    :
    css`left: 0;`
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const TitleBar = () => (
  <Bar>
    <Container>
      <TextIcon>
        Krowie <Icon icon={cowIcon} />
      </TextIcon>

      Produkty

      <TextIcon right>
        <Icon icon={goatIcon} /> Kozie
      </TextIcon>
    </Container>
  </Bar>
);

export default TitleBar;