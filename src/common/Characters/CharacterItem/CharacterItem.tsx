import React from "react";

import { CharacterSchema } from "../../../api/Characters/CharacterSchema";
import "./characterItem.scss";

interface CharacterItemProps {
  character: CharacterSchema;
}

const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  return (
    <div className="characterItemWrapper">
      <img
        className="characterImage"
        src={character.image}
        alt={character.name}
      />
      <p style={{ textAlign: "center" }}>{character.name}</p>
    </div>
  );
};

export default CharacterItem;
