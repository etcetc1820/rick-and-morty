import { AppState } from "../../store/storeStates";
import { CharacterSchema } from "../../api/Characters/CharacterSchema";

export const getCharacters = ({
  charactersReducer: { characters },
}: AppState): CharacterSchema[] => characters;

export const getErrorMessage = ({
  charactersReducer: { errorMessage },
}: AppState): string => errorMessage;

export const getIsLoading = ({
  charactersReducer: { isLoading },
}: AppState): boolean => isLoading;
