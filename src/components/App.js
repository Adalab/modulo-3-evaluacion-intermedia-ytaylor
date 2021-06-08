import React, { useState } from 'react';
import "../stylesheets/App.css"
import Pokelist from "./Pokelist"; 
import data from "../data/data.json"; 

const App = () => {

  const [pokemons] = useState(data); 

  return (
    <>
      <header>
        <h1>Mi lista de Pokemons (en componente funcional)</h1>
      </header>
      <main>
        <section>
          <Pokelist pokemons={pokemons}></Pokelist>
        </section>
       
      </main>
    </>
  );
};

export default App;
