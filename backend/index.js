import express from 'express'
import routerIndex from './routes/index.routes.js'
import routerLogin from "./routes/login.routes.js";
import routerItem from "./routes/item.routes.js";
import routerItem2 from './routes/item2.routes.js';
import cors from "cors"

import { connectDB } from './utils/mongodb.js';

const app = express()
connectDB()

app.use(cors())
app.use(express.json());

app.use(routerIndex)
app.use(routerLogin)
app.use(routerItem2)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
