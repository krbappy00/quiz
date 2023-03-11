import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestions from "../QuizQuestions/QuizQuestions";

const Quiz = () => {
  const { data } = useLoaderData();
  const { name, questions, total } = data;

  return (
    <div className="mx-auto p-4">
      <div className="">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-200">
          Quiz of {name}
        </h1>
      </div>
      {questions.map((q) => (
        <QuizQuestions key={q.id} questionData={q}></QuizQuestions>
      ))}
    </div>
  );
};

export default Quiz;

