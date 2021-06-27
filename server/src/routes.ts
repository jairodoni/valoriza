import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { SearchUserController } from "./controllers/SearchUserController";

const router = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const searchUserController = new SearchUserController();
const authenticateUserController = new AuthenticateUserController();

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();

router.post("/users", createUserController.handle);

router.post("/session", authenticateUserController.handle);

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);

router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/users", ensureAuthenticated, listUsersController.handle);

router.get("/tags", ensureAuthenticated, listTagsController.handle);

router.get("/user/:id", searchUserController.handle);

router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);

router.get(
  "/users/compliments/receiver",
  ensureAuthenticated,
  listUserReceiverComplimentsController.handle
);

export { router };
