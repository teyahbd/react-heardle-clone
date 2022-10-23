const Form = ({
  songTitle,
  guessedTitle,
  setGuessedTitle,
  setPreviousGuesses,
  previousGuesses,
  correctAnswer,
  setCorrectAnswer,
}) => {
  function handleChange(event) {
    setGuessedTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (previousGuesses.length > 4) {
      setCorrectAnswer(`The correct answer is... ${songTitle}`);
    }
    if (guessedTitle.toLowerCase() === songTitle.toLowerCase()) {
      setPreviousGuesses([...previousGuesses, `${songTitle}`]);
      setCorrectAnswer(`The correct answer is... ${songTitle}`);
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
        <button type="submit">Submit</button>
      </form>
      <h3>{correctAnswer}</h3>
    </div>
  );
};

export default Form;
