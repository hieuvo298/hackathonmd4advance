import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import Question from "./question.model";

const Category = sequelize.define(
  "Category",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.CHAR,
    },
  },
  {}
);

export default Category;
