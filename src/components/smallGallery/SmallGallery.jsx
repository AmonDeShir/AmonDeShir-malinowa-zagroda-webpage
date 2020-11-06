import React, { useEffect, useState } from "react"

import Background from "./Background";
import ImageSelector from "./imageSelector/ImageSelector";
import Description from "./Description";

import image0 from "../../assets/images/gallery/smallGallery0.jpg"
import image1 from "../../assets/images/gallery/smallGallery1.jpg"
import image2 from "../../assets/images/gallery/smallGallery2.jpg"
import image3 from "../../assets/images/gallery/smallGallery3.jpg"

import image0Blurred from "../../assets/images/gallery/smallGallery0_blurred.jpg"
import image1Blurred from "../../assets/images/gallery/smallGallery1_blurred.jpg"
import image2Blurred from "../../assets/images/gallery/smallGallery2_blurred.jpg"
import image3Blurred from "../../assets/images/gallery/smallGallery3_blurred.jpg"

const SmallGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    {image: image1, blurred: image0Blurred, title: "Serowar", description: "Mariusz Purgał"},
    {image: image0, blurred: image1Blurred, title: "Gouda Przemkowska", description: "Podczas Solenia"},
    {image: image2, blurred: image2Blurred, title: "Gouda Przemkowska", description: "Leżakuje na półce"},
    {image: image3, blurred: image3Blurred, title: "Sery Pleśniowe", description: "W Dojrzewalni"},
  ]

  let changeImageInterval = null;

  useEffect(() => {
    changeImageAfterFiveSecound();

    return () => {
      clearInterval(changeImageInterval);
    };
  });

  const changeImageAfterFiveSecound = () => {
    changeImageInterval = setInterval(goToNextImage, 5000);
  }

  const goToNextImage = () => {
    setSelectedImage((preState) => isLastImage(preState) ? 0 : preState + 1); 
  }

  const isLastImage = (imageId) => {
    return imageId === images.length - 1
  }

  const onImageSelectorButtonClickedHandler = (id) => {
    setSelectedImage(id);
    resetImageChangeProcess();
  }

  const resetImageChangeProcess = () => {
    clearInterval(changeImageInterval);
    changeImageAfterFiveSecound();
  }

  const getImage = () => {
    return images[selectedImage].image;
  } 

  const getBlurredImage = (idManipulationCallback) => {
    let id = selectedImage;

    if(!idManipulationCallback)
      return images[id].image;
    
    id = idManipulationCallback(id);
    
    if(id < 0)
      id = images.length - 1;
    
    if(id >= images.length)
      id = 0;
  
    return images[id].blurred;
  }

  return (
    <Background prevImage={getBlurredImage((id) => id  + 1)} image={getImage()} nextImage={getBlurredImage((id) => id - 1)}>
      <Description 
        title={images[selectedImage].title}
        description={images[selectedImage].description}
      />

      <ImageSelector
        imagesCount={images.length}
        selectedImage={selectedImage}
        onCircleClick={onImageSelectorButtonClickedHandler}
      />
    </Background>
  )
};

export default SmallGallery;