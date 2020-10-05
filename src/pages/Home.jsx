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
      text=" Lorem ipsum ac odio consequat wisi. Phasellus a dui. Vestibulum aliquam arcu. Praesent sit amet libero vel wisi. Mauris metus. Etiam varius, nisl dui pulvinar ut, placerat tempor nisl neque vel leo. In euismod id, nunc. Suspendisse eu lorem quam eu pede in dolor. Maecenas quam risus, consequat tortor, dictum aliquet molestie. Vivamus iaculis, diam magna orci mauris sit amet mauris sed luctus."
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
