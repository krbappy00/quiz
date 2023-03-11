import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const QuizTopic = ({ quizTopic }) => {
  const { name, logo, total, id } = quizTopic;
  return (
    <div className="bg-gray-200 rounded-xl">
      <div>
        <img className="p-8" src={logo} alt="" />
      </div>
      <div className="flex justify-around items-center p-8 text-lg">
        <p>{name}</p>
        <NavLink to={`/quiz/${id}`}>
          <button className="bg-sky-600 text-gray-200 pl-4 flex justify-center items-center py-1 rounded-lg">
            Start practice
            <ArrowLongRightIcon className="w-6 h-6 "></ArrowLongRightIcon>
          </button>
        </NavLink>
        <NavLink to={`/quiz/${name}`}>
          TEST
        </NavLink>
      </div>
    </div>
    
  );
};

export default QuizTopic;
