import React, { useContext, useState } from "react";
import logo from "../../assets/logo.webp";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import "boxicons/css/boxicons.min.css";
import MiniNav from "./MiniNav";
import LoginContext from "../../contexts/LoginContext";

const Header = () => {
  const [activeMiniNav, setMiniNav] = useState(false);
  const { loggedin, setLoggedin } = useContext(LoginContext);
  console.log(loggedin);
  return (
    <nav className="flex items-center justify-between w-[90%] mx-auto">
      <ul>
        <NavLink to="/">
          <img
            className="w-38 sm:w-60 md:w-72 hover:scale-105 transition"
            src={logo}
            alt="Hablu Programmer"
          />
        </NavLink>
      </ul>
      <div>
        <div className="hidden md:block">
          <Navbar context={setLoggedin} />
        </div>
        <div className="md:hidden">
          {activeMiniNav ? (
            <div>
              <i
                onClick={() => setMiniNav(false)}
                className="bx bx-x text-3xl text-white cursor-pointer"
              />
              <MiniNav context={{ loggedin, setLoggedin }} />
            </div>
          ) : (
            <div>
              <i
                onClick={() => setMiniNav(true)}
                className=" bx bx-menu-alt-right text-2xl sm:text-3xl text-white cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
