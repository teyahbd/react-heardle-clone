const Form = ({
  songTitle,
  guessedTitle,
  setGuessedTitle,
  correctOrIncorrect,
  setCorrectOrIncorrect,
}) => {
  function handleChange(event) {
    setGuessedTitle(event.target.value);
    setCorrectOrIncorrect("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guessedTitle, "handleSubmit guessed value");
    console.log(guessedTitle.toLowerCase(), songTitle.toLowerCase());
    if (guessedTitle.toLowerCase() === songTitle.toLowerCase()) {
      setCorrectOrIncorrect("Correct!");
    } else {
      setCorrectOrIncorrect("Incorrect!");
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
    </div>
  );
};

export default Form;
