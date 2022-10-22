const Guesses = ({ previousGuesses }) => {
  let guessTexts = ["", "", "", "", "", ""];

  if (previousGuesses.length > 0) {
    for (let i = 0; i < previousGuesses.length; i++) {
      guessTexts[i] = previousGuesses[i];
    }
  }
  return (
    <div>
      <h2>{guessTexts[0]}</h2>
      <br />
      <h2>{guessTexts[1]}</h2>
      <br />
      <h2>{guessTexts[2]}</h2>
      <br />
      <h2>{guessTexts[3]}</h2>
      <br />
      <h2>{guessTexts[4]}</h2>
      <br />
      <h2>{guessTexts[5]}</h2>
    </div>
  );
};

export default Guesses;
