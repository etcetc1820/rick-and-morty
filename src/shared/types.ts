import { AppState } from "../store/storeStates";

export interface StatusType {
  id: number;
  value: string;
}

export enum CharactersSearchParams {
  CHARACTER_NAME = "name",
  CHARACTER_STATUS = "status",
}

export type FormValuesTypes = { [key in CharactersSearchParams]: string };

export type GetFromState<T> = (state: AppState) => T;
