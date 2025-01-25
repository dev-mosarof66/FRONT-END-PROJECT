import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet, useMatches } from "react-router-dom";
import colors from "./colors/colors";
import Footer from "./components/Footer/Footer";
import LoginContext from "./contexts/LoginContext";
import Login from "./pages/Login";

export default function Layout() {
  const [loggedin, setLoggedin] = useState(false);
  const matches = useMatches();

  useEffect(() => {
    const currentRoute = matches.find((match) => match.handle?.title);

    if (currentRoute) {
      document.title = currentRoute.handle.title;
    }
  }, [matches]);

  return (
    <div>
      {loggedin ? (
        <div>
          <Login />
        </div>
      ) : (
        <div className=" w-full bg-black">
          <LoginContext.Provider value={{ loggedin, setLoggedin }}>
            <div
              className={`fixed w-full`}
              style={{
                backgroundColor: colors.header,
              }}
            >
              <Header />
            </div>
          </LoginContext.Provider>
          <div className="py-20">
            <Outlet />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
