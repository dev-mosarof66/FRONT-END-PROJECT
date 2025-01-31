import { useContext } from "react";
import {
  MobileHeader,
  FloatingBar,
  LargeHeader,
  ShowAccountDetails,
} from "../../components/Header/Header";
import Context from "../../contexts/Context";
import SideBar from "../SideBar/SideBar";

const NavBar = () => {
  const { showBar, turnOnAccountBar, showSideBar } = useContext(Context);
  //   console.log(showBar);
  console.log(turnOnAccountBar);
  return (
    <div>
      <header className=" px-2 sm:px-4 py-4 relative">
        {/* Mobile Header goes here  */}
        <div className="md:hidden">
          <MobileHeader />
          {showBar ? (
            <div className="absolute top-16  sm:left-52 ">
              <FloatingBar />
            </div>
          ) : (
            ""
          )}
        </div>

        {/* Large header goes here  */}
        <div className="hidden md:block">
          <LargeHeader />
          {showBar ? (
            <div className="absolute top-16 left-24 ">
              <FloatingBar />
            </div>
          ) : (
            ""
          )}
          {turnOnAccountBar ? (
            <div className="absolute right-6 top-16">
              <ShowAccountDetails />
            </div>
          ) : null}
        </div>
        {/* Sidebar renders here  */}
        <div className={`absolute top-0 ${showBar ? "-left-10" : "left-0"} z-50 transition delay-100 duration-1000`}>
          {showSideBar ? <SideBar /> : ""}
        </div>
      </header>
      {/* dummy content  */}
    </div>
  );
};

export default NavBar;
