import { prop, getModelForClass} from "@typegoose/typegoose";
import { IRoom } from "interfaces/models/room";

export class Room {
  @prop({required: true})
  room: IRoom;

}

export const URLModel = getModelForClass(Room);