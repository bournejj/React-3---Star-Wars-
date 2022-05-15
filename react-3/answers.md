- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
  
- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?

  It is being stored in redux thunk

  the store is passed though the persistGate which will persist throughout the whole app which is connected to redux thunk

  
- What does `combineReducers` do? Why are we using it? 

we are using it make one store object from three seperate store objects 

- How does the "Reset to Fresh Exploration" feature work?

it returns the state as INITIAL STATE which is an empty object 

- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?

  Because the list is different based on what the data is and what corresponds with that data but the way the information is displayed is the same. So we should make one component because its job is the same for each list

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?
  
  We are specifially only looking for the first film as that is what the start button does. So there is no need to waste time looking through all the movies.


- What good ideas for designing and organizing React apps have you learned from
  studying this code?

  I have learnt the importance of the seperation of concerns. How import it us to think about your architecture thouroughlt beforehand. So you can seperate out each function or component by its purpose. 
  
- Which Star Wars character would make the best React developer, and why?

Chewbaca because under that hairy facade there is an itelligent problem solver. Don;t judge a book by its cover!
