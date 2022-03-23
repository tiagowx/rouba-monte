import { Request, Response } from "express";

export class RoomController {

  public async room (req: Request, res: Response): Promise<void> {
    res.redirect('');
  }

  public async listRooms(req: Request, res: Response): Promise<void> {

  }
  
}