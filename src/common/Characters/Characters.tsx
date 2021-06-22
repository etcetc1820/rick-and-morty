import React, { useEffect } from "react";

import {
  getCharacters,
  getErrorMessage,
  getIsLoading,
} from "./characters.selectors";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { charactersActions } from "./characters.actions";
import CharacterItem from "./CharacterItem/CharacterItem";
import Loader from "../../shared/Loader/Loader";

const Characters = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(getCharacters);
  const errorMessage = useAppSelector(getErrorMessage);
  const isLoading = useAppSelector(getIsLoading);

  useEffect(() => {
    dispatch(charactersActions.getCharacters());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (errorMessage.length) {
    return <p style={{ textAlign: "center" }}>{errorMessage}</p>;
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
