import React, { useState } from "react"
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
    { id: 0, image: cow1},
    { id: 1, image: cow2},
    { id: 2, image: cow3},
    { id: 3, image: cow4},
    { id: 4, image: cow5},
    { id: 5, image: goat1},
    { id: 6, image: goat2},
    { id: 7, image: goat3},
    { id: 8, image: goat4},
    { id: 9, image: goat5},
    { id: 10, image: goat6},
    { id: 11, image: sheep1}
  ], 
  [
    { id: 12, image: ripeningChamber1},
    { id: 13, image: ripeningChamber2},
    { id: 14, image: ripeningChamber3},
    { id: 15, image: ripeningChamber4},
    { id: 16, image: ripeningChamber5},
    { id: 17, image: work1},
    { id: 18, image: work2},
    { id: 19, image: work3},
    { id: 20, image: work4}
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
  const [showFullscreen, setShowFullscreen] = useState(false)
  const [imageOnFullscreen, setImageOnFullscreen] = useState(0)

  const handleCategoryChange = (value) => {
    setCategory(Number(value))
  };

  const handleImageClick = (image) => {
    setImageOnFullscreen(image);
    setShowFullscreen(true);
  }

  const getFullscreenImage = () => {
    let id =  imageOnFullscreen;

    if(id > images[0].length)
      id -= images[0].length;

    return images[category][id].image;
  }

  return (
    <>
      <Category items={categories} onChange={handleCategoryChange}/>
      <ImagesGrid images={images[category]} onClick={handleImageClick}/>
      <FullscreenImage image={getFullscreenImage()} show={showFullscreen}/>
    </>
  );
}

export default Gallery;