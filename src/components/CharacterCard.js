import React from "react";

export default function CharacterCard(props) {
  return (
    <div className= "card">
      <img src={props.image} alt={props.name}/>
      <h1> {props.name}</h1>
      <p>Species: {props.secies}</p>
      <p>Status: {props.status}</p>

    </div>
  );
}
