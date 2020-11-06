import React, { useState } from "react";
import { useDrag } from "react-use-gesture";
import useWindowEvent from "../utilities/useWindowEvent";
import Category from "../components/gallery/Category";
import ImagesGrid from "../components/gallery/ImagesGrid";

import cow1 from "../assets/images/gallery/animals/cow1.jpg";
import cow2 from "../assets/images/gallery/animals/cow2.jpg";
import cow3 from "../assets/images/gallery/animals/cow3.jpg";
import cow4 from "../assets/images/gallery/animals/cow4.jpg";
import cow5 from "../assets/images/gallery/animals/cow5.jpg";
import goat1 from "../assets/images/gallery/animals/goat1.jpg";
import goat2 from "../assets/images/gallery/animals/goat2.jpg";
import goat3 from "../assets/images/gallery/animals/goat3.jpg";
import goat4 from "../assets/images/gallery/animals/goat4.jpg";
import goat5 from "../assets/images/gallery/animals/goat5.jpg";
import goat6 from "../assets/images/gallery/animals/goat6.jpg";
import sheep1 from "../assets/images/gallery/animals/sheep1.jpg";

import ripeningChamber1 from "../assets/images/gallery/cheeseDairy/ripeningChamber1.jpg";
import ripeningChamber2 from "../assets/images/gallery/cheeseDairy/ripeningChamber2.jpg";
import ripeningChamber3 from "../assets/images/gallery/cheeseDairy/ripeningChamber3.jpg";
import ripeningChamber4 from "../assets/images/gallery/cheeseDairy/ripeningChamber4.jpg";
import ripeningChamber5 from "../assets/images/gallery/cheeseDairy/ripeningChamber5.jpg";
import work1 from "../assets/images/gallery/cheeseDairy/work1.jpeg";
import work2 from "../assets/images/gallery/cheeseDairy/work2.jpeg";
import work3 from "../assets/images/gallery/cheeseDairy/work3.jpeg";
import work4 from "../assets/images/gallery/cheeseDairy/work4.png";
import FullscreenImage from "../components/gallery/FullscreenImage";

const images = [
  [
    { id: 0, image: cow1 },
    { id: 1, image: cow2 },
    { id: 2, image: cow3 },
    { id: 3, image: cow4 },
    { id: 4, image: cow5 },
    { id: 5, image: goat1 },
    { id: 6, image: goat2 },
    { id: 7, image: goat3 },
    { id: 8, image: goat4 },
    { id: 9, image: goat5 },
    { id: 10, image: goat6 },
    { id: 11, image: sheep1 }
  ],
  [
    { id: 12, image: ripeningChamber1 },
    { id: 13, image: ripeningChamber2 },
    { id: 14, image: ripeningChamber3 },
    { id: 15, image: ripeningChamber4 },
    { id: 16, image: ripeningChamber5 },
    { id: 17, image: work1 },
    { id: 18, image: work2 },
    { id: 19, image: work3 },
    { id: 20, image: work4 }
  ]
]

const categories = [
  {
    id: 0,
    value: "Zwierzęta"
  },
  {
    id: 1,
    value: "Serowarnia"
  }
]

const Gallery = () => {
  const [category, setCategory] = useState(0)
  const [isFullscreenDisplayed, setIsFullscreenDisplayed] = useState(false)
  const [imageOnFullscreen, setImageOnFullscreen] = useState(0)

  const gesturesEvents = useDrag((state) => {
    const [move] = state.vxvy;

    const minMoveForceToShowNextImage = -0.5;
    const minMOveForceToShowPrevImage = 0.5;

    if (!isFullscreenDisplayed){
      state.cancel();
      return;
    }

    if (move <= minMoveForceToShowNextImage){
      showNextImageHandler();
      state.cancel();
    }

    if (move >= minMOveForceToShowPrevImage){
      showPrevImageHandler();
      state.cancel();
    }
  });

  useWindowEvent("keydown", (event) => {
    const key = event.code;
    const nextImageKeyCode = "ArrowLeft";
    const prevImageKeyCode = "ArrowRight";
    const closeFullScreenKeyCode = "Escape";

    if (!isFullscreenDisplayed)
      return;

    if (key === nextImageKeyCode)
      showNextImageHandler();

    if (key === prevImageKeyCode)
      showPrevImageHandler();

    if (key === closeFullScreenKeyCode)
      closeFullscreenHandler();
  });

  const showNextImageHandler = () => {
    setImageOnFullscreenByIdManipulation((prevImageId) => prevImageId + 1);
  }

  const showPrevImageHandler = () => {
    setImageOnFullscreenByIdManipulation((prevImageId) => prevImageId - 1);
  }

  const setImageOnFullscreenByIdManipulation = (idManipulationCallback) => {
    setImageOnFullscreen((prevImageId) => {
      const imagesFromCategory = images[category];
      const firstImageId = imagesFromCategory[0].id;
      const lastImageId = imagesFromCategory[imagesFromCategory.length - 1].id;
      const id = idManipulationCallback(prevImageId);

      if (id < firstImageId)
        return getImageObjectFormArray(lastImageId).id;

      if (id > lastImageId)
        return getImageObjectFormArray(firstImageId).id

      return getImageObjectFormArray(id).id;
    });
  }

  const getImageObjectFormArray = (id) => {
    let positionInArray = id;

    if (positionInArray >= images[0].length)
      positionInArray -= images[0].length;

    return images[category][positionInArray];
  }

  const closeFullscreenHandler = () => {
    setIsFullscreenDisplayed(false);
  }

  const handleCategoryChange = (value) => {
    setCategory(Number(value))
  };

  const handleImageClick = (image) => {
    setImageOnFullscreen(image);
    setIsFullscreenDisplayed(true);
  }

  const getFullscreenImage = () => {
    return getImageObjectFormArray(imageOnFullscreen).image;
  }

  return (
    <>
      <Category items={categories} onChange={handleCategoryChange} />
      <ImagesGrid images={images[category]} onClick={handleImageClick} />
      <FullscreenImage
        image={getFullscreenImage()}
        show={isFullscreenDisplayed}
        onLeftArrowClick={showPrevImageHandler}
        onRightArrowClick={showNextImageHandler}
        onCloseButtonClick={closeFullscreenHandler}
        onPointerDown={gesturesEvents().onPointerDown}
      />
    </>
  );
}

export default Gallery;