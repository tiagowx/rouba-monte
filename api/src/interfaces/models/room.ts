import { ICard } from "./cards";
import { IPlayer } from "./player";

export interface IRoom {
  id?: string;
  name: string;
  password?: string;
  players: IPlayer[];
  turns: number;
  status: 'finished' | 'waiting' | 'playing';
  table: ICard[];

  ChooseCard(_deck: ICard[]): ICard;
  LootCards(_player:IPlayer, _cards: ICard[]) : ICard[];
}