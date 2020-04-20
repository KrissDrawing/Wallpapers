import React, { useState, useEffect } from 'react';
import WallpaperWrapper from '../Components/Wallpapers/WallpaperWrapper';

const Favorite = () => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    setFavorite(JSON.parse(window.localStorage.getItem('favorite')));
  }, []);
  console.log(favorite);
  if (favorite !== null && favorite.length !== 0) {
    return <WallpaperWrapper images={favorite} favorite />;
  }
  return <h3>There is no favorite items</h3>;
};

export default Favorite;
