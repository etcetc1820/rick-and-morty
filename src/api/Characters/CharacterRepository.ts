import { AxiosResponse } from "axios";
import constants from "../../shared/constants";
import instance from "../request";

class CharacterRepository {
  getAllCharacters = async (): Promise<void> => {
    const url = constants.schema + constants.domain + constants.base + constants.characters;
    const result = await instance.get(url);
    console.log(result)
  }


}

export default new CharacterRepository();
