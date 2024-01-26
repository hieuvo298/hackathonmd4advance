import Answer from "./answer.model";
import Category from "./category.model";
import Question from "./question.model";

const createTable = () => {
  Question.sync().then(() => {
    console.log("question table created");
  });
  Answer.sync().then(() => {
    console.log("answer table created");
  });
  Category.sync().then(() => {
    console.log("category table created");
  });
};

export default createTable;
