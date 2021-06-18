import constants from "../../shared/constants";
import instance from "../request";
import { CharacterSchema } from "./CharacterSchema";

class CharacterRepository {
  getAllCharacters = async (): Promise<CharacterSchema[]> => {
    const url =
      constants.schema +
      process.env.REACT_APP_DOMAIN +
      constants.base +
      constants.characters;
    const {
      data: { results },
    }: { data: { results: CharacterSchema[] } } = await instance.get(url);

    return results;
  };
}

export default new CharacterRepository();
