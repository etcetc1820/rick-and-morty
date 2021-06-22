import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CharactersState } from "./characters.state";
import { SliceNames } from "../../store/sliceNames";
import { CharacterSchema } from "../../api/Characters/CharacterSchema";

const initialState: CharactersState = {
  characters: [],
  errorMessage: "",
  isLoading: true,
};

export const charactersSlice = createSlice({
  name: SliceNames.CHARACTER_REDUCER,
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<CharacterSchema[]>) {
      state.characters = [...action.payload];
      state.errorMessage = "";
      state.isLoading = false;
    },
    getCharactersFailed(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
      state.isLoading = false;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const charactersReducer = charactersSlice.reducer;
