import Form from "./Form";
import Reset from "./Reset";
import Player from "./Player";
import { useState } from "react";

const SongContainer = () => {
  const [songTitle, setSongTitle] = useState("");
  const [guessedTitle, setGuessedTitle] = useState("");
  const [correctOrIncorrect, setCorrectOrIncorrect] = useState("");

  return (
    <>
      <Reset
        setSongTitle={setSongTitle}
        songTitle={songTitle}
        setGuessedTitle={setGuessedTitle}
        setCorrectOrIncorrect={setCorrectOrIncorrect}
      />
      <Player />
      <Form
        songTitle={songTitle}
        guessedTitle={guessedTitle}
        setGuessedTitle={setGuessedTitle}
        correctOrIncorrect={correctOrIncorrect}
        setCorrectOrIncorrect={setCorrectOrIncorrect}
      />
    </>
  );
};

export default SongContainer;
