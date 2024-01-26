import express, { Request, Response } from "express";
import questionService from "../services/question.service";

const questionController = express.Router();
const QuestionService = new questionService();

questionController.get("/", async (req, res) => {
  try {
    const data = await QuestionService.getAllQuestion();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "error server" });
  }
});
questionController.get("/:id", async (req, res) => {
  try {
    const questionId = Number(req.params.id);
    const data = await QuestionService.getQuestionById(questionId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
questionController.post(
  "/create-question",
  async (req: Request, res: Response) => {
    try {
      const newQuestion = {
        category_id: req.body.category_id,
        content: req.body.content,
        level: req.body.level,
      };
      await QuestionService.createNewQuestion(newQuestion);
      res.status(201).json({ msg: "Create successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: " Server Error" });
    }
  }
);

export default questionController;
