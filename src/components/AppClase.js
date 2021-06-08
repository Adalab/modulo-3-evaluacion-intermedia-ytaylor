import React, { useState } from 'react';
import "../stylesheets/App.css"
import Pokelist from "./Pokelist";
import data from "../data/data.json";

class App extends React.Component {

    constructor(props) {
    super(props);
    this.state={
        pokemons: data
    }
  }

  render() {
    return (
      <>
        <header>
          <h1>Mi lista de Pokemons (en componente funcional)</h1>
        </header>
        <main>
          <section>
            <Pokelist pokemons={this.state.pokemons}></Pokelist>
          </section>
         
        </main>
      </>
    );
  }
}

export default App;
