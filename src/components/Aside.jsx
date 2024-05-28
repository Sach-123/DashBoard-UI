import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import collapse from "../assets/collapse.png";
import open from "../assets/open.png";
const Aside = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="flex max-w-[300px] ">
        <div
          className={`border-r border-white ${toggle ? "hidden" : "visible"}`}
        >
          <div className="text-center text-3xl mt-3 mb-6 tracking-wide">
            DashBoard
          </div>
          <div
            className={`sidebar px-5 h-screen text-center flex flex-1 flex-col `}
          >
            <NavLink className="text-xl" to="/">
              LeaderBoard
            </NavLink>
            <div className="text-xl">Historical Trading</div>
            <div className="text-xl">Historical Chart</div>
            <NavLink to="Scanner">Scanners</NavLink>
            <div className="text-xl">Alerts</div>
            <div className="text-xl">Basic Backtest</div>
            <div className="text-xl">Advanced Backtest</div>
            <div className="text-xl">Pricing</div>
            <div className="text-xl">My Earnings</div>
          </div>
        </div>
        <div>
          <button
            onClick={handleToggle}
            className="w-10 m-auto mx-1 mt-1  border border-[#60FACF] rounded-md  duration-150"
          >
            <img
              id="collapse-btn"
              src={`${toggle ? collapse : open}`}
              alt="collapse"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Aside;
