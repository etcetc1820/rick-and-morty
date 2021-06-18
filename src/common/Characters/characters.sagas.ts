import { call, put, all, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/types";
import CharacterRepository from "../../api/Characters/CharacterRepository";
import { charactersActions } from "./characters.slice";

function* watchGetCharacters(): SagaIterator {
  try {
    const characters = yield call(CharacterRepository.getAllCharacters);

    yield put(charactersActions.setCharacters(characters));
  } catch (e) {
    console.log(e);
  }
}

export default function* charactersWatchers(): SagaIterator {
  yield all([
    takeLatest(charactersActions.setCharacters.type, watchGetCharacters),
  ]);
}
