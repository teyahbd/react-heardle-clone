const Reset = ({
  setGuessedTitle,
  setPreviousGuesses,
  setCorrectAnswer,
  setIsCorrect,
  setIsPlaying,
  audio,
}) => {
  function handleClick(event) {
    setGuessedTitle("");
    setPreviousGuesses([]);
    setCorrectAnswer("");
    setIsCorrect(false);
    setIsPlaying(false);
    audio.pause();
    audio.currentTime = 0;
  }

  return (
    <div>
      <button onClick={handleClick}>RESET</button>
    </div>
  );
  //possibly incorporate reset button into play music button functionality?
};

export default Reset;
