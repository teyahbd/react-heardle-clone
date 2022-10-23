const Guesses = ({ previousGuesses }) => {
  let guessTexts = ["", "", "", "", "", ""];

  if (previousGuesses.length > 0) {
    for (let i = 0; i < previousGuesses.length; i++) {
      guessTexts[i] = previousGuesses[i];
    }
  }
  return (
    <div id="boxes">
      <h3>{guessTexts[0]}</h3>
      <h3>{guessTexts[1]}</h3>
      <h3>{guessTexts[2]}</h3>
      <h3>{guessTexts[3]}</h3>
      <h3>{guessTexts[4]}</h3>
      <h3>{guessTexts[5]}</h3>
    </div>
  );
};

export default Guesses;
