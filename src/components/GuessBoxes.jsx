const GuessBoxes = ({ previousGuesses }) => {
  let guessText = ["", "", "", "", "", ""];

  if (previousGuesses.length > 0) {
    for (let i = 0; i < previousGuesses.length; i++) {
      guessText[i] = previousGuesses[i];
    }
  }
  return (
    <div id="guess-box-container">
      <div className="guess-box">
        <p>{guessText[0]}</p>
      </div>
      <div className="guess-box">
        <p>{guessText[1]}</p>
      </div>
      <div className="guess-box">
        <p>{guessText[2]}</p>
      </div>
      <div className="guess-box">
        <p>{guessText[3]}</p>
      </div>
      <div className="guess-box">
        <p>{guessText[4]}</p>
      </div>
      <div className="guess-box">
        <p>{guessText[5]}</p>
      </div>
    </div>
  );
};

export default GuessBoxes;
