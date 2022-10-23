import Form from "./Form";
import Reset from "./Reset";
import Player from "./Player";
import Guesses from "./Guesses";
import { useState } from "react";

const SongContainer = () => {
  const [songTitle, setSongTitle] = useState("Walking On Sunshine");
  const [songAudio, setSongAudio] = useState("./sunshine.mp3");
  const [guessedTitle, setGuessedTitle] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  return (
    <>
      <Reset
        setSongTitle={setSongTitle}
        songTitle={songTitle}
        setGuessedTitle={setGuessedTitle}
        setSongAudio={setSongAudio}
        setPreviousGuesses={setPreviousGuesses}
        setCorrectAnswer={setCorrectAnswer}
      />
      <Guesses previousGuesses={previousGuesses} />
      <hr />
      <Player songAudio={songAudio} />
      <Form
        songTitle={songTitle}
        guessedTitle={guessedTitle}
        setGuessedTitle={setGuessedTitle}
        setPreviousGuesses={setPreviousGuesses}
        previousGuesses={previousGuesses}
        correctAnswer={correctAnswer}
        setCorrectAnswer={setCorrectAnswer}
      />
    </>
  );
};

export default SongContainer;
