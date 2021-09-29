import { CharacterSchema } from "../../api/Characters/CharacterSchema";
import { GetFromState } from "../../shared/types";

export const getCharacters: GetFromState<CharacterSchema[]> = ({
  charactersReducer: { characters },
}) => characters;

export const getErrorMessage: GetFromState<string> = ({
  charactersReducer: { errorMessage },
}) => errorMessage;

export const getIsLoading: GetFromState<boolean> = ({
  charactersReducer: { isLoading },
}) => isLoading;
