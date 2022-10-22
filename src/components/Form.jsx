const Form = ({
  songTitle,
  guessedTitle,
  setGuessedTitle,
  correctOrIncorrect,
  setCorrectOrIncorrect,
  setPreviousGuesses,
  previousGuesses,
  correctAnswer,
  setCorrectAnswer,
}) => {
  function handleChange(event) {
    setGuessedTitle(event.target.value);
    setCorrectOrIncorrect("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(previousGuesses.length);
    if (previousGuesses.length > 4) {
      setCorrectAnswer(`The correct answer is... ${songTitle}`);
    }
    if (guessedTitle.toLowerCase() === songTitle.toLowerCase()) {
      setPreviousGuesses([...previousGuesses, `✅ ${songTitle}`]);
      setCorrectOrIncorrect("Correct!");
    } else {
      setCorrectOrIncorrect("Incorrect!");
      setPreviousGuesses([...previousGuesses, `❌ ${guessedTitle}`]);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Submit your guess below:</label>
        <br />
        <input type="text" value={guessedTitle} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{correctOrIncorrect}</p>
      <h3>{correctAnswer}</h3>
    </div>
  );
};

export default Form;
