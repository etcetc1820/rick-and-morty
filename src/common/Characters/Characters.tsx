import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { getCharacters } from "./characters.selectors";
import { charactersActions } from "./characters.actions";
import CharacterItem from "./CharacterItem";

const Characters = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(getCharacters);

  useEffect(() => {
    dispatch(charactersActions.getCharacters());
  }, []);

  return !characters.length ? (
    <p>Loading...</p>
  ) : (
    <>
      {characters.map((character) => (
        <CharacterItem character={character} key={character.id} />
      ))}
    </>
  );
};

export default Characters;
