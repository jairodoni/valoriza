import { Request, Response } from "express";
import { SearchUserService } from "../services/SearchUserService";

class SearchUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const searchUserService = new SearchUserService();

    const users = await searchUserService.execute(id);

    return res.json(users);
  }
}

export { SearchUserController };
