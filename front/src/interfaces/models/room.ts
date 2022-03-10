import { IPlayer } from "./player";

export interface IRoom {
  id?: number;
  name: string;
  password?: string;
  players?: IPlayer[];
  status: 'finished' | 'waiting' | 'playing';
}