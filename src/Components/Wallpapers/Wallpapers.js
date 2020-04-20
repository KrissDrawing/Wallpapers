import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import WallpaperWrapper from './WallpaperWrapper';

const Wrapper = Styled.div`
  display:flex;
  justify-content:center;
`;

const Wallpapers = () => {
  const [clientId] = useState('R_KqIAnUPaKvlLfhAxu8grQgkpJLRVeideQN8mQa5Ps');
  const [results, setResults] = useState([]);
  const d = new Date();

  const categories = [
    'vehicle',
    'island',
    'village',
    'nature',
    'city',
    'sea',
    'mountains',
    'forest',
    'meadow',
  ];

  const getCategory = () => {
    return categories[Math.floor(Math.random() * categories.length)];
  };

  const getSeason = () => {
    const month = +d.getMonth() + 1;
    let season = '';
    switch (month) {
      case 12:
      case 1:
      case 2:
        season = 'winter';
        break;
      case 3:
      case 4:
      case 5:
        season = 'spring';
        break;
      case 6:
      case 7:
      case 8:
        season = 'summer';
        break;
      case 9:
      case 10:
      case 11:
        season = 'fall';
        break;
      default:
        season = 'kitten';
        break;
    }
    return season;
  };

  const getTimeofDay = () => {
    const hours = d.getHours();
    let timeOfDay = '';

    switch (hours) {
      case hours > 0 && hours < 5:
        timeOfDay = 'night';
        break;
      case hours >= 5 && hours < 12:
        timeOfDay = 'morning';
        break;
      case hours >= 12 && hours < 18:
        timeOfDay = 'afternoon';
        break;
      case hours >= 18 && hours < 24:
        timeOfDay = 'afternoon';
        break;
      default:
        timeOfDay = 'noon';
        break;
    }
    return timeOfDay;
  };

  const getSearchName = () => {
    return `${getCategory()} - ${getSeason()} - ${getTimeofDay()}`;
  };

  const handleSubmit = (name, page) => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${name}&client_id=${clientId}`;
    axios.get(url).then((response) => {
      setResults(response.data.results);
    });
  };

  // useEffect(() => handleSubmit('spring', 1), []);
  useEffect(() => handleSubmit(getSearchName(), Math.floor(Math.random() * 101)), []);

  return (
    <Wrapper>
      <WallpaperWrapper images={results} />
    </Wrapper>
  );
};

export default Wallpapers;
