import { JsxChild } from "typescript";
import { ICard } from "./cards";

export interface IPlayer {
  id?: number;
  name: string;
  hand: ICard[];
  lot: ICard[];
  children?: JSX.Element | JSX.Element[];
}