import React, { useState } from "react";

import Input from "../../shared/Input/Input";
import Select from "../../shared/Select/Select";
import {
  CharactersSearchParams,
  FormValuesTypes,
  StatusType,
} from "../../shared/types";
import { useAppDispatch } from "../../store/storeHooks";
import { charactersActions } from "../Characters/characters.actions";
import Button from "../../shared/Button/Button";
import "./search.scss";

const statuses: StatusType[] = [
  { id: 1, value: "alive" },
  { id: 2, value: "dead" },
  { id: 3, value: "unknown" },
];

const Search = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState<FormValuesTypes>(
    {} as FormValuesTypes
  );

  const handleFormElementsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();

    dispatch(charactersActions.searchCharacters(formValues));
  };

  return (
    <form className="searchForm" onSubmit={handleFormSubmit}>
      <Input
        type="text"
        name={CharactersSearchParams.CHARACTER_NAME}
        placeholder="Enter character name and hit enter"
        value={formValues[CharactersSearchParams.CHARACTER_NAME]}
        onChange={handleFormElementsChange}
      />
      <Select
        name={CharactersSearchParams.CHARACTER_STATUS}
        items={statuses}
        onChange={handleFormElementsChange}
        placeholder="Select character status"
        selected={formValues[CharactersSearchParams.CHARACTER_STATUS]}
      />
      <Button onClick={handleFormSubmit}>Find them All!!!</Button>
    </form>
  );
};

export default Search;
