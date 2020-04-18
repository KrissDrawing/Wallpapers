import React, { useState } from 'react';
import axios from 'axios';

const Wallpapers = () => {
  const [photo, setPhoto] = useState('');
  const [clientId] = useState('R_KqIAnUPaKvlLfhAxu8grQgkpJLRVeideQN8mQa5Ps');
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setPhoto(e.target.value);
  };

  const handleSubmit = () => {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=${clientId}`;
    axios.get(url).then((response) => {
      setResults(response.data.results);
    });
  };

  return (
    <>
      <input onChange={handleInputChange} value={photo} type="text" />
      <button onClick={handleSubmit} type="submit">
        Search
      </button>
      {results.map((image) => (
        <img src={image.urls.small} alt={image.alt_description} />
      ))}
    </>
  );
};

export default Wallpapers;
