import React from "react";
import { CharacterSchema } from "../../api/Characters/CharacterSchema";

interface CharacterItemProps {
  character: CharacterSchema;
}

const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <img
        src={character.image}
        alt={character.name}
        style={{
          margin: "0 auto 10px",
          display: "block",
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <p style={{ textAlign: "center" }}>{character.name}</p>
    </div>
  );
};

export default CharacterItem;
