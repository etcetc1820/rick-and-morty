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
    addCharacters(state, action: PayloadAction<Character[]>) {
      state.characters = [...action.payload];
    },
  },
});

export const { addCharacters } = charactersSlice.actions;

export const charactersReducer = charactersSlice.reducer;
