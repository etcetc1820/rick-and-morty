import { charactersSlice } from "./characters.slice";
import { createAction } from "@reduxjs/toolkit";
import { SliceNames } from "../../store/sliceNames";

const sliceActions = charactersSlice.actions;
const getCharacters = createAction(
  `${SliceNames.CHARACTER_REDUCER}/getCharacters`
);

export const charactersActions = { ...sliceActions, getCharacters };
