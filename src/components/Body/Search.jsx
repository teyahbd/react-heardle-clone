const Search = ({
  trackData,
  titleGuess,
  setTitleGuess,
  setPreviousGuesses,
  previousGuesses,
  isCorrect,
  setIsCorrect,
  setGuessOptions,
}) => {
  function handleChange(event) {
    if (!isCorrect) {
      setTitleGuess(event.target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (titleGuess.toLowerCase() === trackData[0].toLowerCase()) {
      setPreviousGuesses([...previousGuesses, `${titleGuess}`]);
      setIsCorrect(true);
    } else {
      setPreviousGuesses([...previousGuesses, `❌ ${titleGuess}`]);
    }
    setTitleGuess("");
    setGuessOptions(["", "", ""]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={titleGuess} onChange={handleChange} />
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Search;
