import React from "react";
import logo from "../assets/Logo.png";
import bell from '../assets/bell.png'
import dollar from '../assets/dollar.png'
import boy from '../assets/boy.png'
const Navbar = () => {
  return (
    <>
      <nav className="bg-[#60FACF] w-full h-[60px] flex justify-between items-center px-6 border-b">
        <div className="w-[200px] ">
          <img src={logo} alt="al" />
        </div>
        <div className="flex mr-8">
          <div className="m-4 p-2 bg-black rounded-full hover:cursor-pointer hover:scale-[110%] duration-200">
            <img className="w-6 h-6" src={bell} alt="notifications" />
          </div>
          <div className="m-4 p-2 bg-black rounded-full hover:cursor-pointer hover:scale-[110%] duration-200">
          <img className="w-6 h-6" src={dollar} alt="wallet" />
          </div>
          <div className="m-4 p-2 bg-black rounded-full hover:cursor-pointer hover:scale-[110%] duration-200">
          <img className="w-6 h-6" src={boy} alt="profile" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
