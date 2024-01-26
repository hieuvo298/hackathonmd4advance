import express, { Request, Response } from "express";
import answerService from "../services/answer.service";

const answerController = express.Router();
const AnswerService = new answerService();

answerController.get("/", async (req, res) => {
  try {
    const data = await AnswerService.getAllAnswer();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "error server" });
  }
});
answerController.get("/:id", async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const data = await AnswerService.getAnswerById(userId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
answerController.post("/create-answer", async (req: Request, res: Response) => {
  try {
    const newCategory = {
      is_answer: req.body.is_answer,
      content: req.body.content,
      question_id: req.body.question_id,
    };
    await AnswerService.createAnswer(newCategory);
    res.status(201).json({ msg: "Create successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: " Server Error" });
  }
});

export default answerController;
