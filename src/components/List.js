import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BeerDetails from './BeerDetails'

function List() {
  const [beers, getBeers] = useState([])

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
        .then( ({data}) => getBeers(data))
  }, [])

  return (
    <section className="list">
      {
        beers.map(beer => {
          return <BeerDetails name = {beer.name} 
                              description = {beer.description} 
                              food_pairing = {beer.food_pairing} 
                              image_url = {beer.image_url}
                              key={beer.id}/>
          }
        )
      }
    </section>
  );
}

export default List;
