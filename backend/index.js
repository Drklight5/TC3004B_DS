import express from 'express'
import routerIndex from './routes/index.routes.js'
import routerLogin from "./routes/login.routes.js";
import routerItem from "./routes/item.routes.js";

const app = express()

app.use(express.json());


app.use(routerIndex)
app.use(routerLogin)
app.use(routerItem)

app.listen(5000, console.log("https://localhost:5000"))
