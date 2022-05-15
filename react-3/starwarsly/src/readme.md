### architecture 

* A navbar persists throghout the whole app 
* The app connects with the Swapi api to collect information on films, planets and people 
* A user starts with the first film which is "A new hope"
* From there they can select people and and planets used in this film
* They can start clicking on different people and planets to unlock the films they where in 
* When a user selects a planet, person or film they havent clicked on before this is added to their planet, films and people list
* The information is stored in the redux store which we have access to throughout the whole app


### Fatures

* A reuseable item list component is used to display related content with that film, person or planet
* api calls are made in the actions folder for each field 
* The data is stored in the redux store using an individiual reducer which has its own store 
* Then they are combined together into the rootreducer  

### librares 

* react-router-dom
* react-redux
* reduc-thunk
* redux

