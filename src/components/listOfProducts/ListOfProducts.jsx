import React, { useState } from "react"
import Products from "./Products";
import TitleBar from "./TitleBar";
import ToggleButtons from "./ToggleButtons";

import cheeseImage from "./../../assets/images/listOfProducts/product.svg"

const products = {
  goat: [
    {
      id: 0,
      name: "Pellentesque",
      description: "Quisque lorem tortor fringilla sed, vestibulum id.",
      image: cheeseImage
    },
    {
      id: 1,
      name: "Lorem ipsum dolor",
      description: "Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.",
      image: cheeseImage
    },
    {
      id: 2,
      name: "Nulla imperdiet",
      description: "Nteger aliquam purus. Quisque lorem tortor fringilla sed",
      image: cheeseImage
    }
  ],

  cow: [
    {
      id: 3,
      name: "Maecenas quam",
      description: "Morbi ultrices tortor id nibh, donec ornare.",
      image: cheeseImage
    },
    {
      id: 4,
      name: "Phasellus sem",
      description: "Etiam id quam, sit amet, tellu aliquam sem.",
      image: cheeseImage
    },
    {
      id: 5,
      name: "Nulla vestibulum",
      description: "Morbi pede. Duis elementum nulla",
      image: cheeseImage
    }
  ]
}

const ListOfProducts = () => {
  const [isProductsTypeGoat, setIsProductsTypeGoat] = useState(true)

  const handleToggleProductsType = () => setIsProductsTypeGoat(state => !state);

  return (
    <>
      <TitleBar />
      <ToggleButtons
        isGoatButtonClicked={isProductsTypeGoat}
        onButtonClick={handleToggleProductsType}
      />

      <Products
        products={isProductsTypeGoat ? products.goat : products.cow}
      />
    </>
  );

};

export default ListOfProducts;