import React from "react"
import Header from "../components/header/Header";
import ListOfProducts from "../components/listOfProducts/ListOfProducts";
import Map from "../components/map/Map";
import SmallGallery from "../components/smallGallery/SmallGallery";
import Textblock from "../components/textblock/Textblock";

const Home = () => (
  <>
    <Header/>
    <SmallGallery/>
    <Textblock
      title="O nas"
      text="Gospodarstwo ekologiczne Malinowa Zagroda powstała w 2005 roku, na początku zajmowaliśmy się uprawą malin i produkcją z niej przetworów. Nasza przygoda z serowarstwem rozpoczeła się w 2008 roku, od wyrobów z mleka koziego. DziimagesselectedImage zajmujy się głównie wyrobami z melka krowiego a wyroby kozie są dostępne tylko sezonowo."
    />

    <Map/>
    <Textblock
      title="Kontakt"
      text={
        <>
          Telefon: 512 945 451 <br/>
          Email: kontakt@malinowa-zagroda.com <br/>
          Adres: Wysoka, 52 59-170 Przemków
        </>
      }
      height="120px"
    />

    <ListOfProducts/>
  </>
);

export default Home;  
