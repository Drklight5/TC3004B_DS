import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, putItem } from "../controllers/item.controller.js";
import { authenticateToken } from "../utils/middleware.js";

const routerItem = Router()

routerItem.get("/item",authenticateToken,  getItems )
routerItem.get("/item/:id",authenticateToken,  getItem)
routerItem.post("/item", authenticateToken, postItem)
routerItem.put("/item/:id", authenticateToken, putItem)
routerItem.delete("/item/:id", authenticateToken,  deleteItem)

export default routerItem