import { Op, where } from "sequelize";
import Category from "../models/category.model";
import Question from "../models/question.model";

class questionRepository {
  async getAllQuestion() {
    return await Question.findAll({
      include: [
        {
          model: Category,
        },
      ],
    });
  }
  async getQuestionById(id: number) {
    return await Question.findAll({
      where: {
        id,
      },
    });
  }
  async createNewQuestion(formRequest: any) {
    await Question.create(formRequest);
  }
}

export default questionRepository;
