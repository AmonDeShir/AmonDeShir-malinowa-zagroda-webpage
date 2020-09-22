import React from "react"
import CircleButtonList from "./CircleButtonList"

const ImageSelector = ({imagesCount, selectedImage, onImageSelectorButtonClickedHandler}) => {  

  return (
    <CircleButtonList 
      elementsCount={imagesCount} 
      selectedElementId={selectedImage}
      onCircleButtonClickHandler={onImageSelectorButtonClickedHandler}
    ></CircleButtonList>
  )
}

export default ImageSelector;  