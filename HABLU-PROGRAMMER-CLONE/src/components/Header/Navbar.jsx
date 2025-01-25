import React from "react";
import colors from "../../colors/colors";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { setLoggedin } = props;
  return (
    <ul className=" md:flex items-center justify-center gap-2.5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-lg text-white   hover:text-blue-600 transition delay-100`
        }
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive }) =>
          `text-lg text-white
        hover:text-blue-600 transition delay-100
        `
        }
      >
        <li>Courses</li>
      </NavLink>
      <div className="space-x-4 flex">
        <NavLink
          to="/login"
          onClick={()=>setLoggedin(true)} 
          className={({ isActive }) =>
            `text-base text-white hover:text-gray-200
            border px-6 py-1.5 rounded-full  transition-all      
`
          }
        >
          <button onClick={() => setLoggedin(true)} className="cursor-pointer">
            Login
          </button>
        </NavLink>
        <NavLink
          to="/sign-up"
          className={({ isActive }) =>
            `text-base ${isActive ? "text-white" : "text-white"}
             px-5 py-1.5 rounded-full hidden lg:block
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
  );
};

export default Navbar;
