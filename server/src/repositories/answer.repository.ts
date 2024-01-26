import { Op, where } from "sequelize";
import Category from "../models/category.model";
import Answer from "../models/answer.model";

class AnswerRepository {
  async getAllAnswer() {
    return await Answer.findAll();
  }
  async getAnswerById(id: number) {
    return await Answer.findAll({
      where: {
        id,
      },
    });
  }
  async createNewAnswer(formRequest: any) {
    await Answer.create(formRequest);
  }
}

export default AnswerRepository;
