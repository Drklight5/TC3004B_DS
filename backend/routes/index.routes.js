import { Router } from "express";
import { getIndex, getPong, getMarco } from "../controllers/index.controller.js";
import { authenticateToken } from "../utils/middleware.js";

const routerIndex = Router();

routerIndex.get("/",authenticateToken, getIndex);
routerIndex.get("/ping", authenticateToken, getPong);
routerIndex.get("/marco", authenticateToken, getMarco);

export default routerIndex