import { createAction } from "@reduxjs/toolkit";

import { charactersSlice } from "./characters.slice";
import { SliceNames } from "../../store/sliceNames";
import { FormValuesTypes } from "../../shared/types";

const getCharacters = createAction(
  `${SliceNames.CHARACTER_REDUCER}/getCharacters`
);

const searchCharacters = createAction<FormValuesTypes>(
  `${SliceNames.CHARACTER_REDUCER}/searchCharacters`
);

export const charactersActions = {
  ...charactersSlice.actions,
  getCharacters,
  searchCharacters,
};
