import constants from "../../shared/constants";
import instance from "../request";
import { CharacterSchema } from "./CharacterSchema";

class CharacterRepository {
  getAllCharacters = async (): Promise<CharacterSchema[]> => {
    const url = `${constants.schema}${constants.domain}${constants.base}${constants.characters}`;
    const {
      data: { results },
    }: { data: { results: CharacterSchema[] } } = await instance.get(url);

    return results;
  };

  getCharacterByParams = async ({
    name,
    status,
  }: {
    name?: string;
    status?: string;
  }): Promise<CharacterSchema[]> => {
    let url = `${constants.schema}${constants.domain}${constants.base}${constants.characters}?`;

    if (name) {
      url += `${constants.byName}${name}&`;
    }

    if (status) {
      url += `${constants.byStatus}${status}&`;
    }

    const {
      data: { results },
    }: { data: { results: CharacterSchema[] } } = await instance.get(url);

    return results;
  };
}

export default new CharacterRepository();
