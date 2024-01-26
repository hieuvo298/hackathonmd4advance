import { Express } from "express";
import categoryController from "../controllers/category.controller";
import questionController from "../controllers/question.controller";
import answerController from "../controllers/answer.controller";

const Routers = (app: Express) => {
  app.use("/api/v1/category", categoryController);
  app.use("/api/v1/question", questionController);
  app.use("/api/v1/answer", answerController);
};

export default Routers;
