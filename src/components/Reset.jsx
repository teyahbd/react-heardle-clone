const Reset = ({
  setSongTitle,
  setGuessedTitle,
  setCorrectOrIncorrect,
  setSongAudio,
  setPreviousGuesses,
  setCorrectAnswer,
}) => {
  // Note this title variable only gets set when reset is hit
  const title = "Walking On Sunshine";

  function handleClick(event) {
    setSongTitle(title);
    setGuessedTitle("");
    setPreviousGuesses([]);
    setCorrectAnswer("");
  }

  return (
    <div>
      <button onClick={handleClick}>RESET</button>
    </div>
  );
  //possibly incorporate reset button into play music button functionality?
};

export default Reset;
