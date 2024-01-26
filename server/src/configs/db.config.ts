import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize("quizApp", "root", process.env.PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
