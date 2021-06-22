import { CharacterSchema } from "../../api/Characters/CharacterSchema";

export interface CharactersState {
  characters: CharacterSchema[];
  errorMessage: string;
  isLoading: boolean;
}
