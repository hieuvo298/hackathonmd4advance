import { urlencoded } from "express";
import sequelize from "./configs/db.config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import createTable from "./models";
import Routers from "./routers";
const app = express();

app.use(urlencoded());
app.use(cors());
app.use(bodyParser.json());

sequelize.authenticate();
createTable();

Routers(app);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
