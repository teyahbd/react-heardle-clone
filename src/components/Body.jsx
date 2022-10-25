import GuessBoxes from "./Body/GuessBoxes";
import Result from "./Body/Result";
import Search from "./Body/Search";
import Suggest from "./Body/Suggest";
import Skip from "./Body/Skip";
import Play from "./Body/Play";

import { useState } from "react";

import audioFile from "./sunshine.mp3";

const Container = ({ token }) => {
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [trackData, setTrackData] = useState([
    "Walking On Sunshine",
    "Katrina and the Waves",
  ]);
  const [albumImgURL, setAlbumImgURL] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [titleGuess, setTitleGuess] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioElement = new Audio(audioFile);
  const [audio, setAudio] = useState(audioElement);

  return (
    <div>
      {isCorrect || previousGuesses.length > 5 ? (
        <Result
          token={token}
          trackData={trackData}
          isCorrect={isCorrect}
          albumImgURL={albumImgURL}
          setAlbumImgURL={setAlbumImgURL}
        />
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
          <Suggest
            titleGuess={titleGuess}
            suggestions={suggestions}
            setSuggestions={setSuggestions}
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
            setSuggestions={setSuggestions}
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
