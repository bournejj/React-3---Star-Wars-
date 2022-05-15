import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { resetAll } from "./actions/reset";

// allows user to begin collecting information on films by giving them a button to start with the first film 
// presents the user with a title screen based on Star Wars

function HomePage() {
  const loaded = useSelector(st => st.films[1] !== undefined);
  const dispatch = useDispatch();
// if the user wants to reset this will reset the store to an empty object
  function reset() {
    dispatch(resetAll());
  }
  
  return (
    <>
      {loaded ? (
        <button
          className="btn btn-danger btn-block btn-lg"
          onClick={reset}
        >
          Reset To Fresh Exploration
        </button>
      ) : (
        <Link to="/films/1" className="btn btn-primary btn-block btn-lg">
          Start with &ldquo;A New Hope&rdquo;
        </Link>
      )}
      <img
        className="mt-3 mb-5 w-100"
        alt="StarWars.ly"
        src="https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg"
      />
    </>
  );
}

export default HomePage;
