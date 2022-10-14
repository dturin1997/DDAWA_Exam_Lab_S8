import { Router } from "express";
import * as Controller from "./controller";

const authRouter = Router();

authRouter.route("/").post(Controller.signup);
authRouter.route("/login").post(Controller.login);

export default authRouter