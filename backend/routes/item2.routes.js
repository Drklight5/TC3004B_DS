import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, putItem } from "../controllers/item2.controller.js";

const routerItem2 = Router()

routerItem2.get("/item2", getItems )
routerItem2.get("/item2/:id", getItem)
routerItem2.post("/item2", postItem)
routerItem2.put("/item2/:id", putItem)
routerItem2.delete("/item2/:id", deleteItem)

export default routerItem2