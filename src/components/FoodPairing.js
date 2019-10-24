import React from 'react';

function FoodPairing({food_list}) {
  return (
    <React.Fragment>
      <h3 className="food-pairing-title">Food pairing</h3>
      <ul className="food-pairing-list">
        {
            food_list.map(food => {
                return <li className="food-pairing" key={food}>{food}</li>
            })
        }
      </ul>
    </React.Fragment>
    
  );
}

export default FoodPairing;
