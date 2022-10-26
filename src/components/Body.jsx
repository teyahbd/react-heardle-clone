import GuessBoxes from "./Body/GuessBoxes";
import Result from "./Body/Result";
import Search from "./Body/Search";
import Options from "./Body/Options";
import Skip from "./Body/Skip";
import Play from "./Body/Play";
import * as spotifyApi from "../api";

import { useEffect, useState } from "react";

import audioFile from "./sunshine.mp3";

const Container = ({ token }) => {
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [trackData, setTrackData] = useState(["", "", ""]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [titleGuess, setTitleGuess] = useState("");
  const [guessOptions, setGuessOptions] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songId, setSongId] = useState("05wIrZSwuaVWhcv5FfqeH0");

  const audioElement = new Audio(audioFile);
  const [audio, setAudio] = useState(audioElement);

  useEffect(() => {
    spotifyApi.fetchSong(songId, token).then(({ data }) => {
      setTrackData([data.name, data.artists[0].name, data.album.images[0].url]);
    });
  }, [songId]);

  return (
    <div>
      {isCorrect || previousGuesses.length > 5 ? (
        <Result trackData={trackData} />
      ) : (
        <>
          <GuessBoxes previousGuesses={previousGuesses} />
          <Play
            skipCount={previousGuesses.length}
            isCorrect={isCorrect}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audio={audio}
          ></Play>
          <Options
            titleGuess={titleGuess}
            guessOptions={guessOptions}
            setGuessOptions={setGuessOptions}
            token={token}
          />
          <Search
            previousGuesses={previousGuesses}
            setPreviousGuesses={setPreviousGuesses}
            trackData={trackData}
            isCorrect={isCorrect}
            setIsCorrect={setIsCorrect}
            titleGuess={titleGuess}
            setTitleGuess={setTitleGuess}
            setGuessOptions={setGuessOptions}
          />
          <Skip
            isPlaying={isPlaying}
            setPreviousGuesses={setPreviousGuesses}
            previousGuesses={previousGuesses}
          ></Skip>
        </>
      )}
    </div>
  );
};

export default Container;
