import React from 'react';
import "../stylesheets/App.css"; 
import Pokemon from "./Pokemon"; 

const Pokelist = props => {

    const pokelist = props.pokemons.map(pokemon=>{
       return (
        <li key={pokemon.id}> 
            <Pokemon name={pokemon.name} url={pokemon.url} types={pokemon.types}/> 
        </li>
       ) ;
    })

  return (
  <ul>
     {pokelist}
  </ul>
  );
};

export default Pokelist;