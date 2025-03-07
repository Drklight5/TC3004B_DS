import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, putItem } from "../controllers/item.controller.js";

const routerItem = Router()

routerItem.get("/item", getItems )
routerItem.get("/item/:id", getItem)
routerItem.post("/item", postItem)
routerItem.put("/item/:id", putItem)
routerItem.delete("/item/:id", deleteItem)

export default routerItem