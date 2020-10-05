import React, { useState } from "react"
import TitleBar from "./TitleBar";
import ToggleButtons from "./ToggleButtons";

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
    </>
  );

};

export default ListOfProducts;