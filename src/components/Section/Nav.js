import React, { useState } from "react";

export default function Nav({ sun, setsun }) {
  const handlesun = (()=>{
    setsun(!sun);
  })
  return (
    <div className="mt-5 ml-3">
      <div className="flex items-center justify-between">
        <div className="input relative">
          <input
          
            type="text"
            placeholder="Search for song,artists etc..."
            className="w-96 h-11 bg-inherit rounded-2xl p-2 pl-8 border-2 border-gray-400"
          />
          <i class="absolute left-2 top-4 opacity-55  fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="flex items-center gap-7 mr-5">
        <i class={`cursor-pointer text-xl fa-regular ${sun ? "fa-sun" : "fa-moon"}`}
      onClick={handlesun} ></i>
          <i class="cursor-pointer text-xl relative fa-regular fa-bell"></i>
          <div className="absolute top-[48px] right-[235px]  w-2 h-2 rounded-full bg-red-500"></div>
          <i class="cursor-pointer text-xl fa-solid fa-gear"></i>
          <button className="text-white p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
            upgrade plan
          </button>
        </div>
      </div>
      <div className=" mt-6 flex items-center justify-between ">
        <div>
        <h2 className="text-2xl font-medium ">Billboard Topchart</h2>
        </div>
        <div className="icon mr-3 text-xl font">
        <i class=" fa-solid fa-angle-left"></i>
        <i class="ml-4 fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
}
