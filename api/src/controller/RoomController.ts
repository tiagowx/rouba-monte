import { RoomModel } from "../database/model/Room";
import { Request, Response } from "express";

export class RoomController {
  // criar sala
  public async createRoom(req: Request, res: Response): Promise<void> {
    const { roomName, leaderName, password } = req.body;

    const room = await RoomModel.findOne({ roomName });

    if (room) {
      res.status(200).json(room);
      return;
    }
    

    const newRoom = await RoomModel.create({roomName, leaderName, password});

    res.status(201).json(newRoom._id);

  }

  public async getRoom(req: Request, res: Response): Promise<void> {
    // const { search } = req.body;


  }

  public async listRooms(req: Request, res: Response): Promise<void> {
    // const room = req.body;

    // const { name } = room;



  }

}