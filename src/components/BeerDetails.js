import React from 'react';
import FoodPairing from './FoodPairing';

function BeerDetails({name, image_url, description, food_pairing }) {
  return (
    <div className="beer-details">
      <h2>{name}</h2>
      <img src={image_url} alt={name}/>
      <p>{description}</p>
      <FoodPairing food_list={food_pairing}/>
      <hr/>
    </div>
  );
}

export default BeerDetails;
