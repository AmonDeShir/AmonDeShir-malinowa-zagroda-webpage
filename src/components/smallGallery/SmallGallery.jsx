import React, { useEffect, useState } from "react"

import Background from "./Background";
import ImageSelector from "./imageSelector/ImageSelector";
import Description from "./Description";

import image0 from "../../assets/images/gallery/smallGallery0.jpg"
import image1 from "../../assets/images/gallery/smallGallery1.jpg"
import image2 from "../../assets/images/gallery/smallGallery2.jpg"
import image3 from "../../assets/images/gallery/smallGallery3.jpg"

const SmallGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    {image: image1, title: "Serowar", description: "Mariusz Purgał"},
    {image: image0, title: "Gouda Przemkowska", description: "Podczas Solenia"},
    {image: image2, title: "Gouda Przemkowska", description: "Leżakuje na półce"},
    {image: image3, title: "Sery Pleśniowe", description: "W Dojrzewalni"},
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

  return (
    <Background image={images[selectedImage].image}>
      <Description 
        title={images[selectedImage].title}
        description={images[selectedImage].description}
      />

      <ImageSelector
        imagesCount={images.length}
        selectedImage={selectedImage}
        onImageSelectorButtonClickedHandler={onImageSelectorButtonClickedHandler}
      ></ImageSelector>
    </Background>
  )
};

export default SmallGallery;