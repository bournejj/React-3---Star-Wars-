import React from 'react';
import {useSelector} from 'react-redux';
import ItemList from './ItemList'

// return a list of people that the user has clicked on, updates the list according to the users activity 

function PlanetList() {
  const items = useSelector(st => Object.values(st.planets).map(
    p => ({...p, url: `/planets/${p.id}`})
  ));
  return <ItemList title="Planets" items={items} />;
}

export default PlanetList;