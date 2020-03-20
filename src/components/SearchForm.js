import React, { useState,useEffect } from "react";
import CharacterCard from './CharacterCard';

export default function SearchForm({character}) {
  const[search, setSearch] = useState();
  const[searchedResults,setSearchedResults] = useState([]);

  const searchData = character;


  useEffect(() => {
    const results = searchData.filter(e =>
    e.name.toLowerCase().includes(search)
    );
    setSearchedResults(results);
  }, [search]);

  const handleChange = event => {
    console.log(event.target.value)
    setSearch(event.target.value);
    if (event.target.value="") {
      setSearchedResults([])
    }
  };

 
  return (
    <section className="search-form">
     // Add a search form here

     <form>
        <label for="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchedResults}
          onChange={handleChange}
        />

      </form>

      <div className="character-list grid-view">
        {searchedResults.map(e => (
            <CharacterCard key={e.id} name={e.name} species={e.species} status={e.status} image={e.image} origin={e}/>
          ))}
      </div>


    </section>
  );
}
