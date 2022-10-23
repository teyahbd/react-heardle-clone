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
    } else {
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
      <p>{correctAnswer}</p>
    </div>
  );
};

export default Form;
