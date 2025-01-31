// import React from "react";
import Icons from "../../assets/Icons";
import { IoIosArrowDown, IoMdSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import Context from "../../contexts/Context";
import { useContext } from "react";

//eslint-disable-next-line react/prop-types
export const LargeHeader = () => {
  const {
    showBar,
    setShowBar,
    turnOnAccountBar,
    setTurnOnAccountBar,
    showSideBar,
    setShowSideBar,
  } = useContext(Context);

  return (
    <div className="w-full flex items-center justify-between">
      {/* chat gpt 3.0 content goes here  */}
      <div className="left-header-content w-full flex items-center justify-between">
        <div
          onClick={() => setShowBar(!showBar)}
          className="flex  items-center space-x-1 mx-2 px-2 py-2 hover:bg-gray-500/20 cursor-pointer transition delay-100 rounded-md text-white/70"
        >
          <p className="text-lg">ChatGPT 3.0</p>
          <div>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      {/* right content */}
      <div className="right-header-content">
        <div
          onClick={() => setTurnOnAccountBar(!turnOnAccountBar)}
          className=" w-10 h-10 rounded-full flex items-center justify-center bg-lime-700 hover:ring-2 hover:ring-gray-200/20 cursor-pointer"
        >
          <p className="text-white/80 text-lg">m</p>
        </div>
      </div>
    </div>
  );
};

//  For mobile components

// eslint-disable-next-line react/prop-types
export const MobileHeader = () => {
  const { MobileHeaderBar, setMoblieHeaderBar, showSideBar, setShowSideBar } =
    useContext(Context);
  return (
    <header className=" w-full flex items-center justify-between md:hidden px-2 py-1 ">
      {/* left div goes here  */}
      <div
        onClick={() => setShowSideBar(!showSideBar)}
        className="hover:bg-gray-500/20 px-1.5 py-1.5 rounded-sm transition delay-100 cursor-pointer"
      >
        <img className="w-7" src={Icons.miniMenu} alt="MenuIcon" />
      </div>

      {/* middle div goes here  */}
      <div className="relative">
        <div
          onClick={() => setMoblieHeaderBar(!MobileHeaderBar)}
          className=" flex items-center justify-center hover:bg-gray-500/20 px-2 space-x-2 py-2 rounded-sm transition delay-100 cursor-pointer"
        >
          <p className="text-white/70 text-lg">ChatGPT 3.0</p>
          <IoIosArrowDown
            className={`flex items-center justify-center text-md 
        text-white/70 ${
          MobileHeaderBar ? "rotate-180" : "rotate-0"
        } duration-300`}
          />
        </div>
      </div>

      {/* last div goes here  */}
      <div className="hover:bg-gray-500/20 px-2 py-2 rounded-sm transition delay-100 cursor-pointer">
        <img className="w-6" src={Icons.newChat} alt="Chat Icon" />
      </div>
    </header>
  );
};

export const FloatingBar = () => {
  //  context goes here
  const { tempChatEnabled, setTempChatEnabled } = useContext(Context);
  // toogle bar component
  const ToogleBar = () => {
    return (
      <button className="ml-18 flex">
        <div
          className={`h-5 w-10 ${
            tempChatEnabled ? "bg-lime-800" : "bg-transparent"
          }  outline outline-white/40 flex items-center rounded-xl cursor-pointer   transition delay-100`}
        >
          <div
            className={`w-4 h-4 ${
              tempChatEnabled ? "ml-5" : "ml-1"
            }  rounded-full bg-white/80 transition-transform delay-200 duration-500`}
          />
        </div>
      </button>
    );
  };
  return (
    <div className=" top-12 px-4 rounded-lg bg-gray-500/10 text-white/80 outline outline-gray-100/20">
      <div className="content py-3 space-y-3">
        {/* 1 st content  */}
        <div className="flex items-center px-2 py-1.5 hover:bg-gray-500/10 rounded-lg cursor-pointer transition delay-100">
          <div className="px-2 py-2 bg-white/10 rounded-full">
            <img className="w-4" src={Icons.GPTpremium} alt="" />
          </div>
          <div className="space-y-0.5 px-4">
            <h1 className="text-sm">ChatGPT Plus</h1>
            <p className="text-xs">Our smartest model & more</p>
          </div>
          <div>
            <button className="px-2 py-1 border border-white/20 rounded-full text-xs cursor-pointer hover:bg-gray-500/30">
              Upgrade
            </button>
          </div>
        </div>

        {/* 2 nd content  */}
        <div className="flex items-center px-2 py-1.5 hover:bg-gray-500/10 rounded-lg cursor-pointer transition delay-100">
          <div className="px-2 py-2 bg-white/10 rounded-full">
            <img className="w-4" src={Icons.TaskIcon} alt="" />
          </div>
          <div className="space-y-0.5 px-4">
            <h1 className="text-sm">ChatGPT</h1>
            <p className="text-xs">Great for everyday tasks</p>
          </div>
          <div className="pl-14">
            <img className="w-5" src={Icons.CheckIcon} alt="" />
          </div>
        </div>
        {/* 3 rd content  */}
        <div
          onClick={() => setTempChatEnabled(!tempChatEnabled)}
          className="flex items-center px-2 py-1.5 hover:bg-gray-500/10 rounded-lg cursor-pointer transition delay-100"
        >
          <div className="px-2 py-2 bg-white/10 rounded-full">
            <img className="w-4" src={Icons.TempChat} alt="" />
          </div>
          <div className="-space-y-1 px-4">
            <h1 className="text-sm">Temporary chat</h1>
          </div>
          <div>
            <ToogleBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ShowAccountDetails = () => {
  return (
    <div className="text-white/70 bg-gray-500/10 px-4 py-4 rounded-lg">
      <div className="space-y-2">
        {/* content 1  */}

        <div className="content-2 flex items-center space-x-3 hover:bg-gray-500/20 px-4 py-2 rounded-md cursor-pointer">
          <img className="w-5" src={Icons.UserIcon} alt="" />
          <p className="text-sm">My GPTs</p>
        </div>
        {/* content 2 */}
        <div className="content-1 flex items-center space-x-3 hover:bg-gray-500/20 px-4 py-2 rounded-md cursor-pointer">
          <img className="w-5" src={Icons.CustomizeIcon} alt="" />
          <p className="text-sm">Customize ChatGPT</p>
        </div>
        {/* content 3 */}
        <div className="content-1 flex items-center space-x-3 hover:bg-gray-500/20 px-4 py-2 rounded-md cursor-pointer">
          <IoMdSettings className="text-xl" />
          <p className="text-sm">Settings</p>
        </div>
        {/* line break  */}
        <div className="h-[1px] w-[95%] mx-auto bg-white/10" />

        {/* content 4 */}
        <div className="content-1 flex items-center space-x-3 hover:bg-gray-500/20 px-4 py-2 rounded-md cursor-pointer">
          <img src={Icons.UpgraderIcon} alt="" />
          <p className="text-sm">Upgrade Plan</p>
        </div>
        {/* content 5 */}
        <div className="content-1 flex items-center space-x-3 hover:bg-gray-500/20 px-4 py-2 rounded-md cursor-pointer">
          <img src={Icons.SearchExtensionIcon} alt="" />
          <p className="text-sm">Get ChatGPT search extension</p>
        </div>
        {/* line break */}
        <div className="h-[1px] w-[95%] mx-auto bg-white/10" />

        {/* content 6 */}

        <div className="content-1 flex items-center space-x-3 hover:bg-gray-500/20 px-4 py-2 rounded-md cursor-pointer">
          <MdOutlineLogout className="text-xl" />
          <p className="text-sm">Log out</p>
        </div>
      </div>
    </div>
  );
};
