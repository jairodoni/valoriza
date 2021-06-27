import { ListUsersService } from "../services/ListUsersService";
import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";

class ListUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const listUserService = new ListUserService();

    const users = await listUserService.execute(id);

    return res.json(users);
  }
}

export { ListUserController };
