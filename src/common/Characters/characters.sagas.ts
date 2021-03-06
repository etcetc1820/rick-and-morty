import { call, put, all, takeLatest, delay } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/types";

import CharacterRepository from "../../api/Characters/CharacterRepository";
import { charactersActions } from "./characters.actions";

function* watchGetCharacters(): SagaIterator {
  try {
    yield put(charactersActions.setIsLoading(true));
    yield delay(1000);

    const characters = yield call(CharacterRepository.getAllCharacters);

    yield put(charactersActions.setCharacters(characters));
  } catch (e) {
    yield put(
      charactersActions.getCharactersFailed(
        e?.message || "Something went wrong"
      )
    );
  }
}

function* watchSearchCharacters(
  action: ReturnType<typeof charactersActions.searchCharacters>
): SagaIterator {
  try {
    yield put(charactersActions.setIsLoading(true));
    yield delay(1000);

    const {
      payload: { name, status },
    } = action;
    const characters = yield call(CharacterRepository.getCharacterByParams, {
      name,
      status,
    });
    yield put(charactersActions.setCharacters(characters));
  } catch (e) {
    yield put(
      charactersActions.getCharactersFailed(
        e?.message || "Something went wrong"
      )
    );
  }
}

export default function* charactersWatchers(): SagaIterator {
  yield all([
    takeLatest(charactersActions.getCharacters.type, watchGetCharacters),
    takeLatest(charactersActions.searchCharacters.type, watchSearchCharacters),
  ]);
}
