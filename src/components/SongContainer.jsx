import Form from "./Form";
import Reset from "./Reset";
import Player from "./Player";
import Guesses from "./Guesses";
import { useState } from "react";

const SongContainer = () => {
  const [songTitle, setSongTitle] = useState("");
  const [songAudio, setSongAudio] = useState("./sunshine.mp3");
  const [guessedTitle, setGuessedTitle] = useState("");
  const [correctOrIncorrect, setCorrectOrIncorrect] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  return (
    <>
      <Reset
        setSongTitle={setSongTitle}
        songTitle={songTitle}
        setGuessedTitle={setGuessedTitle}
        setCorrectOrIncorrect={setCorrectOrIncorrect}
        setSongAudio={setSongAudio}
        setPreviousGuesses={setPreviousGuesses}
        setCorrectAnswer={setCorrectAnswer}
      />
      <Guesses previousGuesses={previousGuesses} />
      <Player songAudio={songAudio} />
      <Form
        songTitle={songTitle}
        guessedTitle={guessedTitle}
        setGuessedTitle={setGuessedTitle}
        correctOrIncorrect={correctOrIncorrect}
        setCorrectOrIncorrect={setCorrectOrIncorrect}
        setPreviousGuesses={setPreviousGuesses}
        previousGuesses={previousGuesses}
        correctAnswer={correctAnswer}
        setCorrectAnswer={setCorrectAnswer}
      />
    </>
  );
};

export default SongContainer;
