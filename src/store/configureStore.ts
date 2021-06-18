import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "../common/Characters/characters.slice";

export const store = configureStore({
  reducer: {
    charactersReducer,
  },
});
