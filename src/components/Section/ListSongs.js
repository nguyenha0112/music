import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../../Context";
import Playing from "../Playing";

export default function ListSongs() {
  const { DataSongs, handlesetsong,song } = useContext(Songs);
  const [idsong, setidsong] = useState(0);
  const handleplaysong = (idsong) => {
    setidsong(idsong);
    handlesetsong(idsong);
  };
  useEffect(()=>{
    setidsong(song.id)
  },[song])

  return (
    <div className="flex h-[600px] gap-4">
      <div className=" w-[50%] flex flex-col gap-4 overflow-y-auto scroll ">
        {DataSongs.map((song, index) => (
          <div
            key={index}
            className={`flex items-center p-4 rounded-lg hover:opacity-60 cursor-pointer duration-150 ${
              idsong === song.id ? "text-green-600 scale-105" : ""
            }`}
            onClick={() => handleplaysong(song.id)}
          >
            <p className="w-[5%] m">{index + 1}</p>
            <div className="mx-2 rounded-lg overflow-hidden">
              <img src={song.links.images[0].url} className="w-10 h-auto" />
            </div>
            <i class="mx-2 opacity-40 fa-solid fa-play"></i>
            <p className="w-[30%] mr-4">
            {song.author.length > 9 ? song.author.substring(0,9) + "..." : song.author}
            </p>
            <p className="w-[60%] mr-4">{song.name.length > 20 ? song.name.substring(0,20) + "..." : song.name}</p>
            <p className="mx-2">3:22</p>
            <div>
              <i class="text-red-500 fa-solid fa-heart"></i>
            </div>
          </div>
        ))}
      </div>
      <div className="right w-[50%]">
        <div className="h-2/3 w-2/3 mx-auto mt-6  flex flex-col rounded-2xl">
          <div className="relative z-0 mt-8 ">
            <img
              src={DataSongs[idsong].links.images[0].url}
              className="rounded-full w-3/6  z-1 mt-auto mx-auto shadow-2xl overflow-hidden animate-spin-slow "
            />
            <div className="absolute w-4 p-6 bg-white rounded-full top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
          </div>
          <div className="mx-auto mt-4">
            <h3 className="font-semibold text-lg">{DataSongs[idsong].name}</h3>
            <p className="text-center">{DataSongs[idsong].author}</p>
          </div>
          <Playing />
        </div>
      </div>
    </div>
  );
}
