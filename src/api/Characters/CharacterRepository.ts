import constants from "../../shared/constants";
import instance from "../request";
import { CharacterSchema } from "./CharacterSchema";
import CharacterFactory from "./CharacterFactory";
import Character from "./CharacterResource";

class CharacterRepository {
  getAllCharacters = async (): Promise<Character[]> => {
    const url =
      constants.schema +
      process.env.REACT_APP_DOMAIN +
      constants.base +
      constants.characters;
    const {
      data: { results },
    }: { data: { results: CharacterSchema[] } } = await instance.get(url);

    return results.map((character) => CharacterFactory.create(character));
  };
}

export default new CharacterRepository();
