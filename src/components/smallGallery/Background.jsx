import styled from "styled-components"

const Background = styled.div`
  position: relative;

  width: 100vw;
  height: 71vw;
  
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: ${({theme}) => theme.shadow.default};
`;

export default Background;