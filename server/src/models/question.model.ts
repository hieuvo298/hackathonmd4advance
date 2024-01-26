import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import Answer from "./answer.model";
import Category from "./category.model";

const Question = sequelize.define(
  "Question",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    level: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
Question.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Category.hasMany(Question, { foreignKey: "category_id" });

export default Question;
