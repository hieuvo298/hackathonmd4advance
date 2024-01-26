import { Request, Response } from "express";
import categoryRepository from "../repositories/category.repository";


class categoryService {
  public categoryRepository: categoryRepository;

  constructor() {
    this.categoryRepository = new categoryRepository();
  }

  async getAllCategory(): Promise<any> {
    return await this.categoryRepository.getAllCategory();
  }

  async getCategoryById(id: number): Promise<any> {
    return await this.categoryRepository.getCategoryById(id);
  }

  async createCategory(formRequest: any) {
    await this.categoryRepository.createNewCategory(formRequest);
  }
}

export default categoryService;
