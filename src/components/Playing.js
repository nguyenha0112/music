import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

export default function Playing() {
  const { song,handlesetsong } = useContext(Songs);
  const handleCickNext = () =>{
    handlesetsong(song.id + 1)
  }
  const handleCickPre = () =>{
    handlesetsong(song.id - 1)
  }
  return (
    <div>
      <AudioPlayer
        className="play-music "
        src={song.url}
        showSkipControls={true}
        onClickNext={handleCickNext}
        onClickPrevious={handleCickPre}
      />
    </div>
  );
}
