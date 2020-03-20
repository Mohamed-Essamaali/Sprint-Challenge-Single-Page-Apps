import React, { useEffect, useState } from "react";
import axios from 'axios';


import character from './CharacterCard';
import CharacterCard from "./CharacterCard";
export default function CharacterList() {

  // TODO: Add useState to track data from useEffect
  const[character,setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((Response)=>{

      console.log(Response.data)
      setCharacter(Response.data.results);
    })
    .catch(err=>{
      console.log('no data returned', err);
    })
  }, []);

  return (
    <section className="character-list">
      
    {character.map(e =>{
      return(
        <div className='character'>
          <CharacterCard name={e.name} 
          species={e.species} 
          status = {e.status} 
          image={e.image} origin={e}/>
        </div>
        
      )
    })}

    </section>
  );
}
