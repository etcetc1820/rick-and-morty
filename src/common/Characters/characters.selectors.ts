import { AppState } from "../../store/storeStates";
import { CharacterSchema } from "../../api/Characters/CharacterSchema";

export const getCharacters = ({
  charactersReducer: { characters },
}: AppState): CharacterSchema[] => characters;
