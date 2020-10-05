import React from "react"
import CircleButtonList from "./CircleButtonList"
import PropTypes from "prop-types";

const ImageSelector = ({imagesCount, selectedImage, onCircleClick}) => {  

  return (
    <CircleButtonList 
      elementsCount={imagesCount} 
      selectedElementId={selectedImage}
      onButtonClick={onCircleClick}
    ></CircleButtonList>
  )
}

ImageSelector.propTypes = {
  imagesCount: PropTypes.number,
  selectedImage: PropTypes.number,
  onCircleClick: PropTypes.func
}

ImageSelector.defaultProps = {
  imagesCount: 4,
  selectedImage: 0,
  onCircleClick: () => {}
}

export default ImageSelector;  