import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 100vw;
  display: flex;
`;

const ToggleButtons = ({isGoatButtonClicked, onButtonClick}) => (
  <Container>
    <Button
      onClick={onButtonClick}
      clicked={isGoatButtonClicked === false}
    />

    <Button
      onClick={onButtonClick}
      clicked={isGoatButtonClicked === true}
      isGoat
    />
  </Container>
);

ToggleButtons.propTypes = {
  isGoatButtonClicked: PropTypes.bool,
  onButtonClick: PropTypes.func
}

ToggleButtons.defaultProps = {
  isGoatButtonClicked: false,
  onButtonClick: () => {}
}

export default ToggleButtons;