import { AppState } from "../../store/storeStates";
import Character from "../../api/Characters/CharacterResource";

export const getCharacters = ({
  charactersReducer: { characters },
}: AppState): Character[] => characters;
