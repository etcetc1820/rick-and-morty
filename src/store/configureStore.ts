import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./sagas";

const middleware = getDefaultMiddleware();
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

export const store = configureStore({
  reducer: { ...rootReducer },
  middleware,
});

sagaMiddleware.run(rootSaga);
