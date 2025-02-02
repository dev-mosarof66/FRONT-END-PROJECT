import { useContext, useState } from "react";
import Icons from "../../assets/Icons";
import { IoSearch } from "react-icons/io5";
import Context from "../../contexts/Context";
import "./SideBar.css";

// eslint-disable-next-line react/prop-types
const SideBar = ({ username = "mosarof" }) => {
  console.log("sidebar");
  const { showSideBar, setShowSideBar } = useContext(Context);
  // local state goes here
  const [hover, setHover] = useState(false);
  return (
    <div className="w-72 h-screen px-2 bg-neutral-800 border border-gray-300/30 transition-transform duration-300">
      <div className="h-full flex flex-col justify-between">
        <header>
          <nav className="flex items-center justify-between ">
            <ul
              onClick={() => setShowSideBar(!showSideBar)}
              className="px-2 py-2 hover:bg-gray-500/20 cursor-pointer transition duration-75 rounded-md"
            >
              <img className="md:hidden" src={Icons.miniMenu} alt="" />
              <img className="hidden md:block" src={Icons.navIcon} alt="" />
            </ul>
            <ul className="flex space-x-2 items-center py-3">
              <li className="px-2 py-2 hover:bg-gray-500/20 cursor-pointer transition duration-75 rounded-md">
                <IoSearch className="text-2xl text-white" />
              </li>
              <li className="px-2 py-2 hover:bg-gray-500/20 cursor-pointer transition duration-75 rounded-md">
                <img src={Icons.newChat} alt="" />
              </li>
            </ul>
          </nav>
        </header>

        <main className="sidebar-content h-full overflow-hidden overflow-y-scroll">
          {/* top section goes here  */}
          <section className="space-y-2">
            <div
              onMouseEnter={() => setHover(true)}
              onMouseOut={() => setHover(false)}
              className="flex items-center justify-between px-2 py-2 rounded-md space-x-2 text-white/80
          hover:bg-gray-500/20 transition duration-100 cursor-pointer
          "
            >
              <div
                onMouseEnter={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                className="flex space-x-2 items-center"
              >
                <img
                  className="w-6 border border-white/70 rounded-full"
                  src={Icons.SideBarLogo}
                  alt=""
                />
                <p className="text-sm">ChatGPT</p>
                {hover ? (
                  <img
                    className="w-4 absolute right-8 active:scale-110"
                    src={Icons.newChat}
                    alt=""
                  />
                ) : null}
              </div>
            </div>
            <div className="flex items-center justify-between    hover:bg-gray-500/20 transition duration-100 cursor-pointer rounded-md">
              <div className="flex items-center px-2.5 py-2 rounded-md space-x-2 text-white/80">
                <img className="w-5" src={Icons.dotIcon} alt="" />
                <p className="text-sm">Explore GPTs</p>
              </div>
            </div>
          </section>

          {/* 2nd content goes here  */}

          <section className="text-white/70 space-y-3 py-2">
            <div className="content-1 space-y-2">
              <h1 className="text-sm font-semibold">Today</h1>
              <div className="text-[14px] px-2 space-y-1">
                <p>Learn MongoDB Basics</p>
                <p>Hello assistance request</p>
              </div>
            </div>
            <div className="content-1 space-y-2">
              <h1 className="text-sm font-semibold">Yesterday</h1>
              <div className="text-[14px] px-2 space-y-1">
                <p>Learn MongoDB Basics</p>
                <p>Hello assistance request</p>
                <p>Learn React Basic </p>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="flex flex-col justify-center py-4 space-y-2">
            {/* 1st footer content  */}
            <div className="flex space-x-2 hover:bg-gray-500/20 px-2 py-2 rounded-md cursor-pointer transition duration-100">
              <div className=" flex items-center justify-center">
                <img
                  className="w-5 border border-white/70 rounded-full"
                  src={Icons.UpgraderIcon}
                  alt=""
                />
              </div>
              <div className="text-white/70">
                <h1 className="text-sm">Upgrade plan</h1>
                <p className="text-xs">More access to the best models</p>
              </div>
            </div>
            {/* 2nd footer goes here  */}
            <div className="flex items-center space-x-2 hover:bg-gray-500/20 px-2 py-2 rounded-md cursor-pointer transition duration-100">
              <div className="flex items-center px-2 py-1 border rounded-full bg-lime-500 text-white">
                <p>m</p>
              </div>
              <div className="text-white/70">{username}</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SideBar;
