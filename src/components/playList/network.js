import { Router } from "express";
import * as Controller from "./controller";
import authentication from "../../middlewares/authentication"

const playListRouter = Router();

playListRouter.route("/").get(authentication,Controller.findAll);
playListRouter.route("/").post(authentication,Controller.create);
playListRouter.route("/playlistSongs/:id").get(authentication,Controller.playListById);

export default playListRouter;
