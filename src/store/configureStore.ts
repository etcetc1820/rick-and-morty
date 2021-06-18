import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { charactersReducer } from "../common/Characters/characters.slice";
import createSagaMiddleware from "redux-saga";

const middleware = getDefaultMiddleware();
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

export const store = configureStore({
  reducer: {
    charactersReducer,
  },
  middleware,
});
