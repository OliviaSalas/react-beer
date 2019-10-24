import React from 'react';

function FoodPairing({food_list}) {
  return (
    <React.Fragment>
      <h3>Food pairing</h3>
      <ul className="food-pairing">
        {
            food_list.map(food => {
                return <li key={food}>{food}</li>
            })
        }
      </ul>
    </React.Fragment>
    
  );
}

export default FoodPairing;
