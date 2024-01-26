import { Op, where } from "sequelize";
import Category from "../models/category.model";

class categoryRepository {
  async getAllCategory() {
    return await Category.findAll();
  }
  async getCategoryById(id: number) {
    return await Category.findAll({
      where: {
        id,
      },
    });
  }
  async createNewCategory(formRequest: any) {
    await Category.create(formRequest);
  }
}

export default categoryRepository;
