import React from "react";
import "./Home.css";
import img from "../../images/home.jpg";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "../QuizTopic/QuizTopic";

const Home = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <div className="max-w-[1640px] mx-auto p-4 ">
        <div className="max-h-[600px] relative ">
          {/* overlay */}
          <div className="absolute w-full h-full text-gray-200 max-h-[600px] bg-black/60 flex flex-col justify-center  rounded-lg">
            <h1 className="px-14 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-md">
              Test your knowledge
            </h1>
            <h1 className="px-14  text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-md">
              <span>About</span>{" "}
              <span className="text-orange-300">
                web <br /> development
              </span>
            </h1>
            <h3 className="px-14  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-md text-gray-300 md:mt-14">
              This quiz covers <span className="text-cyan-400">REACT</span>,{" "}
              <br /> <span className="text-yellow-200 ">JavaScript</span>,{" "}
              <span className="text-blue-600">CSS</span>,{" "}
              <span className="text-gray-300 ">Git</span> <br /> of the topics
            </h3>
          </div>
          <img
            className="w-full max-h-[600px] object-cover  rounded-lg"
            src={img}
            alt=""
          />
        </div>
        <div className="background ml-44"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[1640px] mx-auto p-4 ">
        {data.map((quizTopic) => (
          <QuizTopic key={quizTopic.id} quizTopic={quizTopic}></QuizTopic>
        ))}
      </div>
    </div>
  );
};

export default Home;
