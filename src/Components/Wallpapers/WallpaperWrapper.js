import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
  width: 100vw;
  height: 95vh;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 300vh;
  }
`;

const WallpaperWrapper = ({ images, favorite }) => (
  <Wrapper>
    {/* {console.log(images)} */}
    {images !== null && images.slice(0, 6).map((image) => <Card image={image} fav={favorite} />)}
  </Wrapper>
);

WallpaperWrapper.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorite: PropTypes.bool,
};

WallpaperWrapper.defaultProps = {
  favorite: false,
};

export default WallpaperWrapper;
