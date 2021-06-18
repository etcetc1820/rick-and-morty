import { CharacterSchema } from "./CharacterSchema";
import Character from "./CharacterResource";

class CharacterFactory {
  create(output: CharacterSchema): Character {
    return new Character(output);
  }
}

export default new CharacterFactory();
