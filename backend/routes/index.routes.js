import { Router } from "express";
import { getIndex, getPong, getMarco } from "../controllers/index.controller.js";

const routerIndex = Router();

routerIndex.get("/", getIndex);
routerIndex.get("/ping", getPong);
routerIndex.get("/marco", getMarco);

export default routerIndex