import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Img = styled.img`
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
`;

const FavButton = styled.button`
  position: absolute;
  top: 5px;
  left: 5px;
  background: none;
  border: none;
  font-style: bold;
  font-size: 20px;
`;

const Author = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Just+Another+Hand&display=swap');
  font-family: 'Just Another Hand', cursive;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 5px 10px;
  bottom: -10px;
  left: 5px;
  border-radius: 30px;
`;

const Card = ({ image, fav }) => {
  const src = image.urls.regular;
  const alt = image.alt_description;
  const author = image.user.name;
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (fav) setFavorite(true);
  }, []);

  const toggleFavorite = () => {
    let favList = JSON.parse(window.localStorage.getItem('favorite'));
    if (favList === null) {
      favList = [];
    }
    const newItem = {
      ...image,
      favorite: !favorite,
    };

    if (favorite === false) {
      favList.push(newItem);
    } else if (window.confirm('Do you want to remove from favorite?')) {
      favList = favList.filter((item) => item.urls.regular !== src);
    }
    window.localStorage.setItem('favorite', JSON.stringify(favList));
    setFavorite((prevState) => !prevState);
  };

  return (
    <Wrapper>
      {!favorite ? (
        <FavButton onClick={toggleFavorite}>
          <span role="img" aria-label="heart_purple">
            💜
          </span>
        </FavButton>
      ) : (
        <FavButton onClick={toggleFavorite}>
          <span role="img" aria-label="heart_gold">
            💛
          </span>
        </FavButton>
      )}

      <Author>{author}</Author>
      <Img src={src} alt={alt} />
    </Wrapper>
  );
};

Card.propTypes = {
  image: PropTypes.objectOf(PropTypes.object).isRequired,
  fav: PropTypes.bool,
};

Card.defaultProps = {
  fav: false,
};

export default Card;
