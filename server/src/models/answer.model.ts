import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import Question from "./question.model";

const Answer = sequelize.define(
  "Answer",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_answer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
Answer.belongsTo(Question, {
    foreignKey: "question_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Question.hasMany(Answer, { foreignKey: "question_id" });
export default Answer;
