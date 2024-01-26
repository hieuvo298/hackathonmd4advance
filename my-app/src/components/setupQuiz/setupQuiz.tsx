import React, { useEffect, useState } from "react";
import { Select } from "antd";
import "./setupQuiz.css";
import axios from "axios";

const SetupQuiz = () => {
  const [data, setData] = useState<any[]>([]);
  const [questionCount, setQuestionCount] = useState<number>(0);

  useEffect(() => {
    fetchData();
    fetchQuestion();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/category");
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchQuestion = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/question");
      setQuestionCount(response.data.length);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  console.log(data);

  return (
    <div>
      <section className="quiz-setup-container">
        <h1>Setup Quiz</h1>

        <div className="inside-setupquiz">
          <p>Number Of Questions: {questionCount}</p>
        </div>

        <div className="inside-setupquiz">
          <p>Category</p>
          <Select
            defaultValue="thể thao"
            onChange={handleChange}
            options={[
              {
                options: data.map((item) => ({
                  label: item.category_name,
                  value: item.id.toString(),
                })),
              },
            ]}
          />
        </div>

        <div className="inside-setupquiz">
          <p>Difficulty</p>
          <Select
            defaultValue="easy"
            onChange={handleChange}
            options={[
              { label: "Easy", value: "easy" },
              { label: "Medium", value: "medium" },
              { label: "Hard", value: "hard" },
            ]}
          />
        </div>

        <button className="start-btn">Start</button>
      </section>
    </div>
  );
};

export default SetupQuiz;
