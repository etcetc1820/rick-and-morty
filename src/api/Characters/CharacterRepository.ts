import constants from "../../shared/constants";
import instance from "../request";

class CharacterRepository {
  getAllCharacters = async (): Promise<void> => {
    const url =
      constants.schema +
      process.env.REACT_APP_DOMAIN +
      constants.base +
      constants.characters;
    await instance.get(url);
  };
}

export default new CharacterRepository();
