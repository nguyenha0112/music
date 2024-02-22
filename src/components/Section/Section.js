import React from "react";
import music from "../../assets/img/1.jpg";
import music1 from "../../assets/img/2.jpg";
import music2 from "../../assets/img/3.jpg";
import music3 from "../../assets/img/4.jpg";

export default function Section() {
  return (
    <div className="mt-5">
      <div className="flex gap-8">
        <div>
          <div className=" mb-3">
            <img
              src={music}
              className="rounded-lg shadow-xl cursor-pointer hover:translate-y-1 hover:shadow-2xl"
            />
          </div>
          <h3 className="font-medium text-2xl">coloring book</h3>
          <p>Pop king</p>
        </div>
        <div>
          <div className=" mb-3">
            <img
              src={music1}
              className="rounded-lg shadow-xl cursor-pointer hover:translate-y-1 hover:shadow-2xl"
            />
          </div>
          <h3 className="font-medium text-2xl">Start boy</h3>
          <p>the weekend</p>
        </div>
        <div>
          <div className=" mb-3">
            <img
              src={music2}
              className="rounded-lg shadow-xl cursor-pointer hover:translate-y-1 hover:shadow-2xl"
            />
          </div>
          <h3 className="font-medium text-2xl">coloring book</h3>
          <p>Pop king</p>
        </div>
      </div>
      <div className="flex items-center text-left my-8 ">
        <div className="w-[50%]">
          <h2 className=" text-2xl font-semibold">Most popular</h2>
          <p className="opacity-70">92 song</p>
        </div>
        <div>
          <h2 className=" text-2xl font-semibold">Now playing</h2>
          <p className="opacity-70">55 iteam on the list</p>
        </div>
      </div>
    </div>
  );
}
