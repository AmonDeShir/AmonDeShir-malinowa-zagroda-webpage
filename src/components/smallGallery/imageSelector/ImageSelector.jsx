import React from "react"
import PropTypes from "prop-types";
import CircleButtonList from "./CircleButtonList"

const ImageSelector = ({ imagesCount, selectedImage, onCircleClick }) => (
  <CircleButtonList
    elementsCount={imagesCount}
    selectedElementId={selectedImage}
    onButtonClick={onCircleClick}
  />
)

ImageSelector.propTypes = {
  imagesCount: PropTypes.number,
  selectedImage: PropTypes.number,
  onCircleClick: PropTypes.func
}

ImageSelector.defaultProps = {
  imagesCount: 4,
  selectedImage: 0,
  onCircleClick: () => { }
}

export default ImageSelector;  