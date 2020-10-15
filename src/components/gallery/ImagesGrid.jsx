import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { ShadowTop } from "../map/Map";

const Container = styled.div`
  width: 100vw;
  position: relative;
`;

const Grid = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  background-color: blue;
`;

const Image = styled.img`
  width: 33.33vw;
  height: 23.73vw;
`;

const ImagesGrid = ({images, onClick}) => (
  <Container>
    <ShadowTop />
    <Grid>
      {images.map(({id, image}) => 
        <Image key={id} src={image} onClick={() => onClick(id)} alt=" " />
      )}
    </Grid>
  </Container>
);

ImagesGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    onClick: PropTypes.func
  }))
}

ImagesGrid.defaultProps = {
  images: [],
  onClick: () => {}
}

export default ImagesGrid;