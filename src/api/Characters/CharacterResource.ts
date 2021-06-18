import { CharacterSchema, Origin, Location } from "./CharacterSchema";

export default class Character {
  private _id: number;
  private _name: string;
  private _status: string;
  private _type: string;
  private _gender: string;
  private _origin: Origin;
  private _location: Location;
  private _image: string;
  private _episode: string[];
  private _url: string;
  private _created: Date;

  constructor({
    id,
    name,
    status,
    type,
    gender,
    origin,
    location,
    image,
    episode,
    url,
    created,
  }: CharacterSchema) {
    this._id = id;
    this._name = name;
    this._status = status;
    this._type = type;
    this._gender = gender;
    this._origin = { ...origin };
    this._location = { ...location };
    this._image = image;
    this._episode = [...episode];
    this._url = url;
    this._created = created;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get origin(): Origin {
    return this._origin;
  }

  set origin(value: Origin) {
    this._origin = { ...value };
  }

  get location(): Location {
    return this._location;
  }

  set location(value: Location) {
    this._location = { ...value };
  }

  set image(value: string) {
    this._image = value;
  }

  get image(): string {
    return this._image;
  }

  set episode(value: string[]) {
    this._episode = [...value];
  }

  get episode(): string[] {
    return this._episode;
  }

  set url(value: string) {
    this._url = value;
  }

  get url(): string {
    return this._url;
  }

  set created(value: Date) {
    this._created = value;
  }

  get created(): Date {
    return this._created;
  }
}
