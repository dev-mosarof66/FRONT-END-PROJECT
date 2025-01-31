import { useContext } from "react";
// import NavBar from "../../components/Header/NavBar";
// import Main from "../Main/Main";
// import Icons from "../../assets/Icons";
import Context from "../../contexts/Context";
import SideBar from "../../components/SideBar/SideBar";

import { MobileHeader, FloatingBar } from "../../components/Header/Header";

const Landing = () => {
  const { MobileHeaderBar, showSideBar } = useContext(Context);
  return (
    <main className="w-full h-screen bg-black/85">
      {/* mobile header goes here  */}
      <section className="Mobile Header section">
        <div className="md:hidden">
          <MobileHeader />
          {MobileHeaderBar ? (
            <div className="absolute top-16  sm:left-52 ">
              <FloatingBar />
            </div>
          ) : (
            ""
          )}
          {/* Mobile Sidebar goes here  */}
          {showSideBar ? (
            <div className="absolute top-0">
              <SideBar />
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
};

export default Landing;
