import React from "react";
import { searchRes as results } from "../constants/index";
const Scanner = () => {
  return (
    <div className="flex flex-1 flex-col w-full items-center">
      <div className="text-5xl m-5 tracking-wide">Scanner</div>
      <div className="w-full mr-10 y">
        <div className="flex justify-between text-2xl pb-2  border-b">
          <div className="underline underline-offset-8 decoration-orange-500">
            My Scanner
          </div>
          <div>
            <button className="text-xl p-2 border border-white rounded-lg hover:text-orange-400 hover:border-orange-400">
              +Add new
            </button>
          </div>
        </div>
        <div className="flex flex-col">

          <div className="flex ">
            <div className="flex-1 flex flex-col m-2">
              <label htmlFor="name">Name</label>
              <input
                className="p-2 rounded-sm text-black"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="flex-1 flex flex-col m-2">
              <label htmlFor="description">Description</label>
              <input
                className="p-2 rounded-sm text-black"
                type="text"
                placeholder="Description"
              />
            </div>
          </div>

          <div className="justify-between mt-2 grid grid-cols-3 gap-2">
            <div className="flex flex-col w-full p-2 border rounded-2xl bg-[#232323]">
              <label
                className="bg-indigo-600 p-2 text-center text-xl rounded-t-xl border-b border-black"
                htmlFor="search"
              >
                Search
              </label>
              <input
                className="p-3 text-black rounded-b-xl"
                type="search"
                placeholder="search here..."
              />
              <div className="h-96 overflow-auto">
                {results.map((res) => (
                  <p className="p-1 px-4 m-2 border rounded-2xl hover:cursor-pointer  hover:border-orange-400 hover:text-orange-400">
                    {res}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full p-2 border rounded-2xl bg-[#232323]">
              <label
                className="bg-indigo-600 p-2 text-center text-xl rounded-t-xl border-b border-black"
                htmlFor="filter"
              >
                Filter
              </label>
              <div className="p-4">
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="border flex-1 p-2 rounded-l-lg hover:cursor-pointer hover:border-orange-400 hover:text-orange-400">
                      Equity
                    </div>
                    <div
                      className="border
                    flex-1 p-2 rounded-r-lg hover:cursor-pointer hover:border-orange-400 hover:text-orange-400"
                    >
                      Nifty 50
                    </div>
                  </div>
                  <div className="border p-2 my-2 rounded-lg hover:cursor-pointer hover:border-orange-400 hover:text-orange-400">
                    X
                  </div>
                  <div className="flex my-3">
                    <div className="flex flex-1 flex-col">
                      <label htmlFor="stime">Start Time</label>
                      <input
                        className="text-black p-2 px-4 mr-2 hover:border-orange-400 hover:text-orange-400"
                        type="time"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label htmlFor="etime">End Time</label>
                      <input
                        className="text-black p-2 px-4 hover:border-orange-400 hover:text-orange-400"
                        type="time"
                      />
                    </div>
                  </div>
                  <div className="flex my-4 justify-between items-center">
                    <div>Which satisfy?</div>
                    <div className="border p-4 bg-gray-800 rounded-lg  hover:text-orange-400">
                      <input
                        type="radio"
                        id="satisfy"
                        name="isSatisfy"
                        className=""
                      />
                      <label htmlFor="satisfy" className="pr-3 items-center">
                        Satisfy
                      </label>
                      <input type="radio" id="notsatisfy" name="isSatisfy" />
                      <label htmlFor="notsatisfy" className="">
                        Not Satisfy
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4 items-center">
                    <div className="">
                      <input
                        id="isDuplicate"
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label htmlFor="isDuplicate" className="mx-2">
                        Duplicates results
                      </label>
                    </div>
                    <div className="text-black ">
                      <select
                        className="p-2 px-3 bg-gray-800 text-white rounded-md"
                        name="timeframe"
                      >
                        <option value="tframe">TimeFrame</option>
                        <option value="1">1 min</option>
                        <option value="2">2 min</option>
                        <option value="3">3 min</option>
                        <option value="5">5 min</option>
                        <option value="10">10 min</option>
                        <option value="15">15 min</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full p-2 border rounded-2xl bg-[#232323]">
              <label
                className="bg-indigo-600 p-2 text-center text-xl rounded-t-xl border-b border-black mb-2"
                htmlFor="operations"
              >
                Operations
              </label>

              <div className=" h-full flex flex-col">
                <div className="flex justify-between">
                  <div className="w-[60%] border p-2 rounded-lg m-1 h-">
                    <p className="text-center mb-6">Math Operations</p>
                    <div className="flex justify-between">
                      <span className="p-2 border rounded-xl bg-gray-800 hover:cursor-pointer hover:bg-orange-400">
                        +
                      </span>
                      <span className="p-2 border rounded-xl bg-gray-800 hover:cursor-pointer hover:bg-orange-400">
                        -
                      </span>
                      <span className="p-2 border rounded-xl bg-gray-800 hover:cursor-pointer hover:bg-orange-400">
                        *
                      </span>
                      <span className="p-2 border rounded-xl bg-gray-800 hover:cursor-pointer hover:bg-orange-400">
                        /
                      </span>
                      <span className="p-2 border rounded-xl bg-gray-800 hover:cursor-pointer hover:bg-orange-400">
                        Number
                      </span>
                    </div>
                  </div>
                  <div className="w-[40%] border p-2 rounded-lg m-1">
                    <p className="text-center mb-6">Stock</p>
                    <p className="text-center mb-6 p-2 border rounded-xl bg-gray-800 hover:cursor-pointer hover:bg-orange-400">
                      Stock LTp
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex-1 border p-2 rounded-lg m-1">
                    <p className="text-center mb-3">Comparison / Cross</p>
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <span className="p-2 border rounded-xl bg-gray-800 hover:cursor-pointer hover:bg-orange-400">
                          {`>`}
                        </span>
                        <span className="p-2 border rounded-xl bg-gray-800 hover:cursor-pointer hover:bg-orange-400">
                          {`<`}
                        </span>
                        <span className="p-2 border rounded-xl bg-gray-800 hover:cursor-pointer hover:bg-orange-400">
                          {`>=`}
                        </span>
                        <span className="p-2 border rounded-xl bg-gray-800 hover:cursor-pointer hover:bg-orange-400">
                          {`<=`}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="p-2 my-2 border rounded-xl bg-gray-800 hover:cursor-pointer hover:bg-orange-400">
                          Cross from above to below
                        </span>
                        <span className="p-2 my-2 border rounded-xl bg-gray-800 hover:cursor-pointer hover:bg-orange-400">
                          Cross from below to above
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 border p-2 rounded-lg m-1">
                    <p className="text-center mb-6">
                      <p>Binary Operation</p>
                      <div className="flex flex-col mt-5">
                        <span className="p-2 my-2 border rounded-xl bg-gray-800 hover:cursor-pointer hover:bg-orange-400">
                          OR
                        </span>
                        <span className="p-2 my-2 border rounded-xl bg-gray-800 hover:cursor-pointer hover:bg-orange-400">
                          AND
                        </span>
                        <span className="p-2 my-2 border rounded-xl bg-gray-800 hover:cursor-pointer hover:bg-orange-400">
                          Subtract
                        </span>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
