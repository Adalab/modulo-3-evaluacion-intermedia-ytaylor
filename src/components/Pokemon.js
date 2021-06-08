import React from 'react';
import "../stylesheets/App.css"

const Pokemon = (props) => {

    const typesList = props.types.map((type, index)=>{
        return(
           <li key={index}>
                {type}
           </li> 
        )
    }); 

  return (
    <>
        <div>
            <img src={props.url} alt={props.name}/> 
            <h3>{props.name}</h3>
            <ul>
               {typesList}
            </ul>
        </div>
    </>
  );
};

export default Pokemon;