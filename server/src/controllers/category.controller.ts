import express, { Request, Response } from "express";
import categoryService from "../services/category.service";

const categoryController = express.Router();
const CategoryService = new categoryService();

categoryController.get("/", async (req, res) => {
  try {
    const data = await CategoryService.getAllCategory();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "error server" });
  }
});
categoryController.get("/:id", async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const data = await CategoryService.getCategoryById(userId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
categoryController.post(
  "/create-category",
  async (req: Request, res: Response) => {
    try {
      const newCategory = {
        category_name: req.body.category_name,
      };
      await CategoryService.createCategory(newCategory);
      res.status(201).json({ msg: "Create successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: " Server Error" });
    }
  }
);

export default categoryController;
