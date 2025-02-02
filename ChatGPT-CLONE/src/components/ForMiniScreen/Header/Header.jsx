// import { useContext } from "react";
import Icons from "../../../assets/Icons";
import { IoIosArrowDown } from "react-icons/io";
import './Header.css'

function Header() {
  return (
    <header className="flex items-center justify-center">
      {/* left div goes here  */}
      <nav>
        <div
          //   onClick={() => setShowSideBar(!showSideBar)}
          className="nav-icon hover:bg-gray-400/20 rounded-sm transition delay-100 cursor-pointer"
        >
          <img className="w-7" src={Icons.miniMenu} alt="MenuIcon" />
        </div>

        {/* middle div goes here  */}
        <div className="relative">
          <div
            // onClick={() => setMoblieHeaderBar(!MobileHeaderBar)}
            className=" middle-icon flex items-center justify-center hover:bg-gray-400/20  rounded-sm transition delay-100 cursor-pointer"
          >
            <p className="text-white/70 text-lg">ChatGPT 3.0</p>
            <IoIosArrowDown
              className={`flex items-center justify-center text-md 
              text-white/70 
    
    
               duration-300`}
            />
          </div>
        </div>

        {/* last div goes here  */}
        <div className=" last-icon hover:bg-gray-400/20 rounded-sm transition delay-100 cursor-pointer">
          <img className="w-6" src={Icons.newChat} alt="Chat Icon" />
        </div>
      </nav>
    </header>
  );
}

export default Header;

//   export const FloatingBar = () => {
//     //  context goes here
//     const { tempChatEnabled, setTempChatEnabled } = useContext(Context);
//     // toogle bar component
//     const ToogleBar = () => {
//       return (
//         <button className="ml-18 flex">
//           <div
//             className={`h-5 w-10 ${
//               tempChatEnabled ? "bg-lime-800" : "bg-transparent"
//             }  outline outline-white/40 flex items-center rounded-xl cursor-pointer   transition delay-100`}
//           >
//             <div
//               className={`w-4 h-4 ${
//                 tempChatEnabled ? "ml-5" : "ml-1"
//               }  rounded-full bg-white/80 transition-transform delay-200 duration-500`}
//             />
//           </div>
//         </button>
//       );
//     };
//     return (
//       <div className=" top-12 px-4 rounded-lg bg-gray-500/10 text-white/80 outline outline-gray-100/20">
//         <div className="content py-3 space-y-3">
//           {/* 1 st content  */}
//           <div className="flex items-center px-2 py-1.5 hover:bg-gray-500/10 rounded-lg cursor-pointer transition delay-100">
//             <div className="px-2 py-2 bg-white/10 rounded-full">
//               <img className="w-4" src={Icons.GPTpremium} alt="" />
//             </div>
//             <div className="space-y-0.5 px-4">
//               <h1 className="text-sm">ChatGPT Plus</h1>
//               <p className="text-xs">Our smartest model & more</p>
//             </div>
//             <div>
//               <button className="px-2 py-1 border border-white/20 rounded-full text-xs cursor-pointer hover:bg-gray-500/30">
//                 Upgrade
//               </button>
//             </div>
//           </div>

//           {/* 2 nd content  */}
//           <div className="flex items-center px-2 py-1.5 hover:bg-gray-500/10 rounded-lg cursor-pointer transition delay-100">
//             <div className="px-2 py-2 bg-white/10 rounded-full">
//               <img className="w-4" src={Icons.TaskIcon} alt="" />
//             </div>
//             <div className="space-y-0.5 px-4">
//               <h1 className="text-sm">ChatGPT</h1>
//               <p className="text-xs">Great for everyday tasks</p>
//             </div>
//             <div className="pl-14">
//               <img className="w-5" src={Icons.CheckIcon} alt="" />
//             </div>
//           </div>
//           {/* 3 rd content  */}
//           <div
//             onClick={() => setTempChatEnabled(!tempChatEnabled)}
//             className="flex items-center px-2 py-1.5 hover:bg-gray-500/10 rounded-lg cursor-pointer transition delay-100"
//           >
//             <div className="px-2 py-2 bg-white/10 rounded-full">
//               <img className="w-4" src={Icons.TempChat} alt="" />
//             </div>
//             <div className="-space-y-1 px-4">
//               <h1 className="text-sm">Temporary chat</h1>
//             </div>
//             <div>
//               <ToogleBar />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
