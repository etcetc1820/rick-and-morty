import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharactersState } from "./characters.state";
import { SliceNames } from "../../store/sliceNames";
import { CharacterSchema } from "../../api/Characters/CharacterSchema";

const initialState: CharactersState = {
  characters: [],
};

export const charactersSlice = createSlice({
  name: SliceNames.CHARACTER_REDUCER,
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<CharacterSchema[]>) {
      state.characters = [...action.payload];
    },
  },
});

export const charactersReducer = charactersSlice.reducer;
