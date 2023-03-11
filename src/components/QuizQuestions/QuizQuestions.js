import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const QuizQuestions = ({ questionData }) => {
  const { question, correctAnswer, id, options } = questionData;
  const [open, setOpen] = useState(false);
  const [radioOption, setRadioOption] = useState();
  const onchangeValue = (event) => {
    setRadioOption(event.target.value);
    console.log(event.target.value);
    console.log(radioOption);
  };
  if (radioOption) {
    if (radioOption === correctAnswer) {
      toast.success("Correct Answer");
      setRadioOption("");
    } else {
      toast.warn("Incorrect Answer");
      setRadioOption("");
    }
  }

  return (
    <div>
      <div
        className={'w-[300px] sm:w-[300px] md:w-[400px] mx-auto bg-gray-200 mb-2 mt-10 p-4 rounded-xl drop-shadow-lg'}
      >
        <p>{correctAnswer}</p>
      </div>
      <div className="w-[300px] sm:w-[400px] md:w-[700px] mx-auto bg-gray-200 mb-10 mt-10 p-8 rounded-xl drop-shadow-lg">
        <div className=" w-full flex justify-between">
          <h3 className="text-xl text-gray-700">{question}</h3>
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <EyeSlashIcon className="w-6 h-6"></EyeSlashIcon>
            ) : (
              <EyeIcon className="w-6 h-6"> </EyeIcon>
              
            )}
          </div>
        </div>
        <div>
          <form action="" className="grid grid-cols-2 gap-3 mt-4">
            <div
              onChange={onchangeValue}
              className={`flex items-center border border-gray-400 rounded-md p-4 bg-gray-100 drop-shadow-md hover:bg-white ${options[0] === correctAnswer && open ? " bg-green-300" : ""}`}
            >
              <input
                type="radio"
                value={options[0]}
                name="quiz"
                id={options[0]}
              />
              <label
                className="ml-2 text-gray-700 text-justify"
                htmlFor={options[0]}
              >
                <p>{options[0]}</p>
              </label>
            </div>
            <div
              onChange={onchangeValue}
              className={`flex items-center border border-gray-400 rounded-md p-4 bg-gray-100 drop-shadow-md hover:bg-white ${options[1] === correctAnswer && open ? " bg-green-300" : ""}`}
            >
              <input
                type="radio"
                name="quiz"
                value={options[1]}
                id={options[1]}
              />
              <label
                className="ml-2 text-gray-700 text-justify"
                htmlFor={options[1]}
              >
                {options[1]}
              </label>
            </div>
            <div
              onChange={onchangeValue}
              className={`flex items-center border border-gray-400 rounded-md p-4 bg-gray-100 drop-shadow-md hover:bg-white ${options[2] === correctAnswer && open ? " bg-green-300" : ""}`}
            >
              <input
                type="radio"
                name="quiz"
                value={options[2]}
                id={options[2]}
              />
              <label
                className="ml-2 text-gray-700 text-justify"
                htmlFor={options[2]}
              >
                {options[2]}
              </label>
            </div>
            <div
              onChange={onchangeValue}
              className={`flex items-center border border-gray-400 rounded-md p-4 bg-gray-100 drop-shadow-md hover:bg-white ${options[3] === correctAnswer && open ? " bg-green-300" : ""}`}
            >
              <input
                type="radio"
                name="quiz"
                value={options[3]}
                id={options[3]}
              />
              <label
                className="ml-2 text-gray-700 text-justify"
                htmlFor={options[3]}
              >
                {options[3]}
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;
