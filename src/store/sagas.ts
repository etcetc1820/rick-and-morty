import { all, fork } from "redux-saga/effects";

import charactersWatchers from "../common/Characters/characters.sagas";

export default function* rootSaga(): Generator {
  yield all([fork(charactersWatchers)]);
}
