import { api } from "./index";
import { Request, Response } from "express";
import { URLController } from "./controller/URLController";
import { RoomController } from "./controller/RoomController";

export function routes() {
  const urlController = new URLController;
  const roomCoontroller = new RoomController;

  api.post('/shorten', urlController.shorten);
  api.get('/:hash', urlController.redirect);

  api.post('/createroom', roomCoontroller.createRoom);

  api.get('/test', (req: Request, res: Response) => {
    res.json("success: true")
  })
}