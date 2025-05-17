import { Router } from "express";
import { postCreateAccount, postLogin } from "../controllers/login2.controller.js";

const routerLogin = Router()

routerLogin.post("/login", postLogin)
routerLogin.post("/signup", postCreateAccount);

export default routerLogin