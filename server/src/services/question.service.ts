import { Request, Response } from "express";
import questionRepository from "../repositories/question.repository";



class questionService {
  public questionRepository: questionRepository;

  constructor() {
    this.questionRepository = new questionRepository();
  }

  async getAllQuestion(): Promise<any> {
    return await this.questionRepository.getAllQuestion();
  }

  async getQuestionById(id: number): Promise<any> {
    return await this.questionRepository.getQuestionById(id);
  }

  async createNewQuestion(formRequest: any) {
    await this.questionRepository.createNewQuestion(formRequest);
  }
}

export default questionService;
