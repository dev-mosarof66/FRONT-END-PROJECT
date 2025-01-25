import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 ">
      <hr className="bg-gray-700 w-4/5 my-4 mx-auto h-0.5" />

      <div
        className="text-white  flex flex-col space-y-6 lg:flex-row lg:space-y-0 items-center justify-evenly w-4/5 lg:pl-11
     mx-auto"
      >
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">Contact Info</h1>
          <p className="hover:text-blue-500 delay-100 cursor-pointer">
            Call Us: +8801816986263
          </p>
          <p className="hover:text-blue-500 delay-100 cursor-pointer">
            Address: Rajshahi, Bangladesh
          </p>
          <p className="hover:text-blue-500 delay-100 cursor-pointer">
            Mail Us: eshan@hablu-programmer.com
          </p>
        </div>
        <div
          className="w-3/5
          flex items-center justify-around lg:-mt-2 lg:pl-20"
        >
          <div>
            <h1 className="text-xl font-semibold">Important Links</h1>
            <p className="cursor-pointer hover:text-blue-500 transition delay-100">
              About
            </p>
            <p className="cursor-pointer hover:text-blue-500 transition delay-100">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:text-blue-500 transition delay-100">
              Terms & Conditions
            </p>
            <p className="cursor-pointer hover:text-blue-500 transition delay-100">
              Refund Policy
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-xl font-semibold">Follow Us</h1>
            <a 
            href="https://www.youtube.com/@HabluProgrammer" target="_blank"
            className="cursor-pointer hover:text-blue-500 transition delay-100">
              Youtube
            </a>
            <a 
            
            href="https://www.linkedin.com/company/hablu-programmers" target="_blank"
            className="cursor-pointer hover:text-blue-500 transition delay-100">
              Linkedin
            </a>
            <a 
            href="https://github.com/Hablu-Programmer" target="_blank"
            className="cursor-pointer hover:text-blue-500 transition delay-100">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
