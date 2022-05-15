import React from 'react';
import { Link } from "react-router-dom";

// in each catetegory film, planet and person page a corresponding list is returned with links relating to that page 
function Sublist({title, items}) {
  return (
    <>
      <h3>{ title }</h3>
      <ul>
        {items.map(item =>
          <li key={item.id}><Link to={item.url}>{item.display}</Link></li>
        )}
      </ul>
    </>
  );
}

export default Sublist;