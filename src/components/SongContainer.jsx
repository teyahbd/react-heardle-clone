import Form from "./Form";
import Reset from "./Reset";
import Player from "./Player";
import Guesses from "./Guesses";
import Skip from "./Skip";
import { useState } from "react";
import audioFile from "./sunshine.mp3";

const SongContainer = ({ albumURL, token, setAlbumURL }) => {
  // use arrays for state here and destructure into components?
  const [songTitle, setSongTitle] = useState("Walking On Sunshine");
  const [artist, setArtist] = useState("Katrina and the Waves");
  const [guessedTitle, setGuessedTitle] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSkipDisabled, setIsSkipDisabled] = useState(false);
  const [suggestions, setSuggestions] = useState(["", "", ""]);

  const audioElement = new Audio(audioFile);
  const [audio, setAudio] = useState(audioElement);

  return (
    <>
      <Reset
        setGuessedTitle={setGuessedTitle}
        setPreviousGuesses={setPreviousGuesses}
        setCorrectAnswer={setCorrectAnswer}
        setIsCorrect={setIsCorrect}
        setIsPlaying={setIsPlaying}
        audio={audio}
        setIsSkipDisabled={setIsSkipDisabled}
      />
      <Guesses previousGuesses={previousGuesses} />
      <hr />
      <Player
        skipCount={previousGuesses.length}
        isCorrect={isCorrect}
        audio={audio}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setIsSkipDisabled={setIsSkipDisabled}
      />
      <Skip
        setPreviousGuesses={setPreviousGuesses}
        previousGuesses={previousGuesses}
        isPlaying={isPlaying}
        isSkipDisabled={isSkipDisabled}
      />
      <Form
        songTitle={songTitle}
        guessedTitle={guessedTitle}
        setGuessedTitle={setGuessedTitle}
        setPreviousGuesses={setPreviousGuesses}
        previousGuesses={previousGuesses}
        correctAnswer={correctAnswer}
        setCorrectAnswer={setCorrectAnswer}
        isCorrect={isCorrect}
        setIsCorrect={setIsCorrect}
        setIsSkipDisabled={setIsSkipDisabled}
        albumURL={albumURL}
        artist={artist}
        token={token}
        setAlbumURL={setAlbumURL}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
      />
    </>
  );
};

export default SongContainer;
