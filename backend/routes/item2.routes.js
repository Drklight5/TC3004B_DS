import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, putItem } from "../controllers/item2.controller.js";

const routerItem2 = Router()

routerItem2.get("/item", getItems )
routerItem2.get("/item/:id", getItem)
routerItem2.post("/item", postItem)
routerItem2.put("/item/:id", putItem)
routerItem2.delete("/item/:id", deleteItem)

export default routerItem2