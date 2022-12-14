import { Router } from "express";
import * as Controller from "./controller";
import authentication from "../../middlewares/authentication"

const songRouter = Router();

songRouter.route("/").get(authentication, Controller.findAll);
songRouter.route("/").post(authentication, Controller.create);
songRouter.route("/:id").get(authentication, Controller.findOne);

export default songRouter;
