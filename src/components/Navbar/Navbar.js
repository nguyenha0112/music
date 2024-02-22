import React, { useEffect } from "react";
import avatar from "../../assets/img/avatar.jpg";
import iphone from "../../assets/img/iphone.webp";

export default function Navbar( {sun,setsun}) {
  const hanlcheck = ((suns) => {
    setsun(suns);
  })
  return (
    <div className=" ">
      <div className="mt-7 mb-10 text-center ">
        <div className="relative m-auto mb-3 w-20 h-auto rounded-full  shadow-2xl">
          <img
            src={avatar}
            className="w-full h-full object-cover rounded-full"
            alt="#"
          />
          <div className="absolute top-[-4px] right-[-28px] p-2">
            <div className="font-bold text-xs text-slate-100 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl w-12 text-center">
              pro
            </div>
          </div>
        </div>
        <h3 className="font-semibold text-lg">Nguyên Hà</h3>
        <p>Nguyen229396@gmail.com</p>
      </div>
      <div className="ml-7 text-xl font-medium">
        <div className="nav flex flex-col  gap-5 " >
          <div className="flex items-center gap-7 cursor-pointer hover:opacity-75" >
            <i class="text-slate-500 fa-solid fa-house"></i>
            <h5>Home</h5>
          </div>
          <div className="flex items-center gap-7 cursor-pointer hover:opacity-75" >
            <i class="text-slate-500 fa-solid fa-window-maximize"></i>
            <h5>Browse</h5>
          </div>
          <div className="flex items-center gap-7 cursor-pointer hover:opacity-75" >
            <i class="text-slate-500 fa-solid fa-images"></i>
            <h5>Album</h5>
          </div>
        <div className="flex items-center gap-7 cursor-pointer hover:opacity-75" >
            <i class="text-slate-500 fa-solid fa-palette"></i>
            <h5>Artists</h5>
          </div>
          <div className="flex items-center gap-7 cursor-pointer hover:opacity-75" >
            <i class="text-slate-500 fa-solid fa-video"></i>
            <h5>videos</h5>
          </div>
        </div>
        <div className="text-xl mt-7">
          <h4 className=" mb-4 font-medium text-zinc-600">MY MUSIC</h4>
          <div className="">
            <div className="flex items-center gap-7 mb-3 ">
              <i class="text-slate-500 fa-solid fa-clock"></i>
              <h5>Recently Played</h5>
            </div>
            <div className="flex items-center gap-7 mb-3 ">
              <i class="text-slate-500 fa-regular fa-file"></i>
              <h5>Local Files</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={`ml-7 mt-96 flex items-center justify-around w-[220px] h-20 rounded-2xl ${sun ?"bg-slate-200" : "bg-gray-800"} `}>
        <div className={`img p-2 rounded-xl ${sun ? "bg-white" : "bg-slate-700"}`}>
          <img src={iphone} alt="" className="h-12 w-auto" />
        </div>
        <div className="font-medium text-lg">
          <h4>IPhone X</h4>
          <p>254 GB</p>
        </div>
        <div className="icon">
          <i class="text-slate-500 fa-solid fa-circle-down"></i>
        </div>
      </div>
    </div>
  );
}
