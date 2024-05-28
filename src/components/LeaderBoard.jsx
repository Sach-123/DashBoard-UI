import React from "react";
import Table from "./Table";

const LeaderBoard = () => {
  return (
    <div className="flex flex-1 flex-col w-full items-center">
      <div className="text-5xl m-5 tracking-wide">LeaderBoards</div>
      <div className="w-[80%] mr-10 y">
        <div className="flex justify-between border-white border bg-indigo-600">
          <div className="text-4xl font-semibold text-black   ml-5 my-2 tracking-wide">
            Basic Backtest
          </div>
          <div class="my-auto mr-5 input-group text-black text-xl">
            <span class="input-group-text   p-1 rounded-lg font-semibold">
              Slippage :
            </span>
            <select class="form-select border border-black rounded-lg">
              <option value="0">0%</option>
              <option value="0.5">0.5%</option>
              <option value="1">1%</option>
            </select>
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default LeaderBoard;
