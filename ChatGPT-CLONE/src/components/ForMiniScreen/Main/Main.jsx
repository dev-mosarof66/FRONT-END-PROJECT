// import React from 'react'
import { FaArrowUp, FaPenNib, FaGift, FaPen } from "react-icons/fa";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { IoDocumentTextSharp } from "react-icons/io5";
import Icons from "../../../assets/Icons";
import "./Main.css";
import { useState } from "react";

function Main() {
  const [True, setTrue] = useState(true);
  return (
    <div className="container relative w-full flex flex-col items-center justify-center text-white/60">
      <h1>What can I help with?</h1>

      <div className="content-container flex">
        <div className="content flex flex-col">
          <input type="text" placeholder="Message ChatGPT" />
          <div className="icons-content flex items-center space-x-2">
            <div className="left-icon-container">
              <img className="file-icon" src={Icons.FileIcon} alt="" />
              <img className="web-icon" src={Icons.webIcon} alt="" />
            </div>
            <div className="right-icon-container">
              {True ? (
                <div className="mic-icon">
                  <img src={Icons.MicIcon} alt="" />
                </div>
              ) : (
                <div className="arrow-icon">
                  <FaArrowUp className="text-black text-base" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="shortcut-container hidden sm:flex w-full  items-center justify-around">
        <div className="shortcut-icon flex items-center text-sm shadow shadow-gray-400/10 hover:bg-gray-500/10 hover:text-white cursor-pointer">
          <BiSolidPhotoAlbum className="text-green-400" />
          <p>Create image</p>
        </div>
        <div className="shortcut-icon flex items-center text-sm shadow shadow-gray-400/10 hover:bg-gray-500/10 hover:text-white cursor-pointer">
          <IoDocumentTextSharp className="text-yellow-300" />
          <p>Summerize text</p>
        </div>
        <div className="shortcut-icon flex items-center text-sm shadow shadow-gray-400/10 hover:bg-gray-500/10 hover:text-white cursor-pointer">
          <FaPenNib className="text-lime-500" />
          <p>Help write</p>
        </div>
        <div className="shortcut-icon flex items-center text-sm shadow shadow-gray-400/10 hover:bg-gray-500/10 hover:text-white cursor-pointer">
          <FaGift className="text-red-600" />
          <p>Suprise me</p>
        </div>
      </div> 

      {/* footer goes here */}

      <footer className="asbolute bottom-0">
        <p>ChatGPT can make mistakes. Check important info.</p>
      </footer>
    </div>
  );
}

export default Main;
