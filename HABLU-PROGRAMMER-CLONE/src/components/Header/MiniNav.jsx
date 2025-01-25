import React from "react";
import { NavLink } from "react-router-dom";
import colors from "../../colors/colors";
const MiniNav = () => {
  return (
    <div className="absolute bg-black bg-opacity-50 w-full h-screen top-16 left-0">
      <ul className=" md:flex flex-col items-center justify-center px-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-red-500" : "text-white"}`
          }
        >
          <li className="pt-3">Home</li>
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-red-500" : "text-white"}`
          }
        >
          <li className="pt-3">Courses</li>
        </NavLink>
        <div
          className="space-x-4 flex pt-4
        "
        >
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-lg text-white hover:text-gray-200
            border px-6 py-1.5 rounded-full  transition-all      
`
            }
          >
            <button className="cursor-pointer">Login</button>
          </NavLink>
          <NavLink
            to="/sign-up"
            className={({ isActive }) =>
              `text-lg ${isActive ? "text-white" : "text-white"}
             px-5 py-1.5 rounded-full 
        `
            }
            style={{
              backgroundColor: colors.primary,
              boxShadow: `0px 3px 10px ${colors.primary}`,
            }}
          >
            <button className="cursor-pointer">Sign Up</button>
          </NavLink>
        </div>
      </ul>
    </div>
  );
};

export default MiniNav;
