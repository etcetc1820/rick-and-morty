import React from "react";
import { useAppSelector } from "../../store/storeHooks";
import { getCharacters } from "./characters.selectors";

const Characters = (): JSX.Element => {
  const characters = useAppSelector(getCharacters);
  console.log(characters);

  return <div>hahahaha</div>;
};

export default Characters;
