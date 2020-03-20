import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";

export default function App() {
  return (
    <div>
 <main data-testid='app'>
      <Header />
      <CharacterList/>
    </main>
    
    </div>
   
  );
}
