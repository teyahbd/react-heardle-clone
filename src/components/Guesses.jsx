const Guesses = ({ previousGuesses }) => {
  let guessTexts = ["", "", "", "", "", ""];

  if (previousGuesses.length > 0) {
    for (let i = 0; i < previousGuesses.length; i++) {
      guessTexts[i] = previousGuesses[i];
    }
  }
  return (
    <div id="boxes">
      <p>{guessTexts[0]}</p>
      <p>{guessTexts[1]}</p>
      <p>{guessTexts[2]}</p>
      <p>{guessTexts[3]}</p>
      <p>{guessTexts[4]}</p>
      <p>{guessTexts[5]}</p>
    </div>
  );
};

export default Guesses;
