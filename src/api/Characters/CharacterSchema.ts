export interface CharacterSchema {
  id: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export type Location = {
  url: string;
  name: string;
};

export type Origin = {
  url: string;
  name: string;
};
