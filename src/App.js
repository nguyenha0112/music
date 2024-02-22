import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Nav from "./components/Section/Nav";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";
import Section from "./components/Section/Section";
import ListSongs from "./components/Section/ListSongs";

function App() {
  const [song, setsong] = useState(DataSongs[0]);
  const handlesetsong = (idsong) => {
    const song = DataSongs.find((song) => song.id === idsong);
    setsong(song);
  };
  const [sun, setsun] = useState(false);
  console.log(sun);

  return (
    <div className="App h-[1080px] flex font-poppins overflow-hidden">
      <Songs.Provider value={{ DataSongs, song, handlesetsong }}>
        <div
          className={`w-1/5 p-4 ${
            sun ? "bg-white" : "bg-darkmode text-darkmode"
          }`}
        >
          <Navbar sun={sun} setsun={setsun} />
        </div>
        <div
          className={`w-4/5 p-4 ${
            sun ? "bg-slate-50" : "bg-darkmode text-darkmode"
          }`}
        >
          <Nav sun={sun} setsun={setsun} />
          <Section />
          <ListSongs />
        </div>
      </Songs.Provider>
    </div>
  );
}

export default App;
