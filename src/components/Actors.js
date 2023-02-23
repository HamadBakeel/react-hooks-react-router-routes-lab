import React from "react";
import {actors, movies} from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map(actor =>
        <div key={actor.name}>
          <h3>Name: {actor.name}</h3>
          <p>Movies</p>
          <ul>
            {
              actor.movies.map((movie, index) => <li key={index}>{movie}</li>)
            }
          </ul>

        </div>)
    }
  </div>;
}

export default Actors;
