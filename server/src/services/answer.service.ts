import { Request, Response } from "express";
import categoryRepository from "../repositories/category.repository";
import answerRepository from "../repositories/answer.repository";


class answerService {
  public answerRepository: answerRepository;

  constructor() {
    this.answerRepository = new answerRepository();
  }

  async getAllAnswer(): Promise<any> {
    return await this.answerRepository.getAllAnswer();
  }

  async getAnswerById(id: number): Promise<any> {
    return await this.answerRepository.getAnswerById(id);
  }

  async createAnswer(formRequest: any) {
    await this.answerRepository.createNewAnswer(formRequest);
  }
}

export default answerService;
