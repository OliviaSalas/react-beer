import React from 'react';
import FoodPairing from './FoodPairing';

function BeerDetails({name, image_url, description, food_pairing }) {
  return (
    <div className="beer-details">
      <img src={image_url} alt={name}/>
      <div className="text">
        <div className="beer-description">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <FoodPairing className="food-pairing-description" food_list={food_pairing}/>
      </div>
    </div>
  );
}

export default BeerDetails;
