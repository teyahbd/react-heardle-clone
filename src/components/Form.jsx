const Form = ({
  songTitle,
  guessedTitle,
  setGuessedTitle,
  setPreviousGuesses,
  previousGuesses,
  correctAnswer,
  setCorrectAnswer,
  isCorrect,
  setIsCorrect,
  setIsSkipDisabled,
}) => {
  function handleChange(event) {
    setGuessedTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (guessedTitle.length < 1) {
    } else if (previousGuesses.length > 4) {
      setCorrectAnswer(`The correct answer is... ${songTitle}`);
    } else if (guessedTitle.toLowerCase() === songTitle.toLowerCase()) {
      setPreviousGuesses([...previousGuesses, `${songTitle}`]);
      setCorrectAnswer(`The correct answer is... ${songTitle}`);
      setIsCorrect(true);
      setIsSkipDisabled(true);
    } else {
      setPreviousGuesses([...previousGuesses, `❌ ${guessedTitle}`]);
    }
    setGuessedTitle("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Submit your guess below:</label>
        <br />
        <input type="text" value={guessedTitle} onChange={handleChange} />
        <br />
        <button type="submit" disabled={isCorrect}>
          Submit
        </button>
      </form>
      <h3>{correctAnswer}</h3>
    </div>
  );
};

export default Form;
