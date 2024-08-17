import React, { useState } from 'react';
import './PDA.css';

const stashImage = 'https://avatanplus.com/files/resources/original/58c3e14640c8a15abd27fa79.jpg'; // Replace with your stash image URL
const mapImage = 'https://avatanplus.com/files/resources/original/58c3e14640c8a15abd27fa79.jpg'; // Replace with your map image URL

const stashInfo = {
  title: 'Тайник 1',
  description: 'Этот тайник содержит ценные ресурсы.',
  contents: 'Медикаменты, патроны, еда.',
  image: stashImage,
};

const PDA = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div className="map-container">
      <img src={mapImage} alt="Map" className="map-image" />
      <div 
        className="stash" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      ></div>
      {showInfo && (
        <div className="stash-info">
          <h3>{stashInfo.title}</h3>
          <p>{stashInfo.description}</p>
          <p>{stashInfo.contents}</p>
          <img src={stashInfo.image} alt="Stash" className="stash-image" />
        </div>
      )}
    </div>
  );
};

export default PDA;

// PDA.js