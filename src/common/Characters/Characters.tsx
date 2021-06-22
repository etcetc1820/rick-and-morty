import React, { useEffect } from "react";
import {
  getCharacters,
  getErrorMessage,
  getIsLoading,
} from "./characters.selectors";

import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { charactersActions } from "./characters.actions";
import CharacterItem from "./CharacterItem";

const Characters = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(getCharacters);
  const errorMessage = useAppSelector(getErrorMessage);
  const isLoading = useAppSelector(getIsLoading);

  useEffect(() => {
    dispatch(charactersActions.getCharacters());
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorMessage.length) {
    return <p>{errorMessage}</p>;
  }

  return (
    <>
      {characters.map((character) => (
        <CharacterItem character={character} key={character.id} />
      ))}
    </>
  );
};

export default Characters;
