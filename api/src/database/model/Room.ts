import { prop, getModelForClass} from "@typegoose/typegoose";
import { IRoom } from "interfaces/models/room";

export class Room {
  @prop({required: true})
  roomName: string;
  
  @prop({required: true})
  leaderName: string;
  
  @prop({required: false})
  password: string;

}

export const RoomModel = getModelForClass(Room);