import React from "react";

const Character = props => {
  return (
    <ul>
  <li>Name : {props.character.name}</li>
  <li>Height(cm): {props.character.height}</li>
  <li>Hair Color: {props.character.hair_color}</li>
  <li>Eye Color: {props.character.eye_color}</li>
  </ul>
  )
};

export default Character;
