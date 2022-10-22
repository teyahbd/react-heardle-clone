const Reset = ({
  setSongTitle,
  setGuessedTitle,
  setCorrectOrIncorrect,
  setSongAudio,
}) => {
  // Note this title variable only gets set when reset is hit
  const title = "Walking On Sunshine";

  function handleClick(event) {
    setSongTitle(title);
    setGuessedTitle("");
    setCorrectOrIncorrect("");
  }

  return (
    <div>
      <button onClick={handleClick}>RESET</button>
    </div>
  );
  //possibly incorporate reset button into play music button functionality?
};

export default Reset;
