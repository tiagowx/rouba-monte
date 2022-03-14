import { ICard } from "../interfaces/models/cards";
import { IPlayer } from "../interfaces/models/player";
import { IRoom } from "../interfaces/models/room";
import { Deck } from "./Deck";

export class GameController implements IRoom {

  id?: number | undefined;
  name: string;
  password?: string | undefined;
  players: IPlayer[];
  turns: number;
  status: "finished" | "waiting" | "playing";
  table: ICard[];

  constructor(name: string, players: IPlayer[], deck: Deck,) {
    this.turns = 0;
    this.name = 'sala#' + this.id;
    this.status = "waiting";
    this.players = players;
    this.table = [];
  }

  ChooseCard(_deck: ICard[]): ICard {
    const randomCard: number = Math.floor(Math.random() * _deck.length);
    return _deck[randomCard];
  }

  LootCards(_player: IPlayer, _cards: ICard[]) {
    return _player.lot.concat(_cards);
  };

}