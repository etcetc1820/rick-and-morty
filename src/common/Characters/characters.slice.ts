import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Character from "../../api/Characters/CharacterResource";
import { CharactersState } from "./characters.state";

const initialState: CharactersState = {
  characters: [],
};

const charactersSlice = createSlice({
  name: "charactersReducer",
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<Character[]>) {
      state.characters = [...action.payload];
    },
  },
});

export const charactersActions = charactersSlice.actions;

export const charactersReducer = charactersSlice.reducer;
