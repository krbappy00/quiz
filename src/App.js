import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Quiz from "./components/Quiz/Quiz";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error/Error";
import { ToastContainer } from "react-toastify";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <Quiz></Quiz>,
        },
        {
          path: "/statistics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Statistics></Statistics>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
      ],
    },
    {
      path: "*",
      element: <Error></Error>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
