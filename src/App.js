import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm.js";


export default function App() {
  return (
    <div>
 <main data-testid='app'>
      <Header />
      {/* <SearchForm /> */}
      <CharacterList/>
    </main>
    
    </div>
   
  );
}
