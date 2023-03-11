import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logoq.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:flex md:justify-around md:items-center md:pt-6">
      <div className="flex items-center justify-between md:w-3/12 md:flex md:items-center md:justify-between">
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <XMarkIcon className="w-6 h-6"></XMarkIcon>
          ) : (
            <Bars3Icon className="w-6 h-6"></Bars3Icon>
          )}
        </div>
        <img className="w-32 md:w-44" src={logo} alt="/" />
      </div>
      <div>
        <ul
          className={`md:flex absolute md:static bg-gray-200 px-6 py-3 rounded-lg duration-700 ease-in z-40 ${
            open ? "top-12" : "left-[-500px]"
          }`}
        >
          <li className="md:mr-16 text-gray-500 text-xl hover:text-gray-900">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="md:mr-16 text-gray-500 text-xl hover:text-gray-900">
            <NavLink to={"/quiz/1"}>Quiz</NavLink>
          </li>
          <li className="md:mr-16 text-gray-500 text-xl hover:text-gray-900">
            <NavLink to={"/statistics"}>Statistics</NavLink>
          </li>
          <li className="md:mr-16 text-gray-500 text-xl hover:text-gray-900">
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
