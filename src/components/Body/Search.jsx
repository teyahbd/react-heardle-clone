const Search = ({
  trackData,
  titleGuess,
  setTitleGuess,
  setPreviousGuesses,
  previousGuesses,
  isCorrect,
  setIsCorrect,
  setGuessOptions,
  isPlaying,
}) => {
  function handleChange(event) {
    if (!isCorrect) {
      setTitleGuess(event.target.value);
    }
  }

  function handleClick() {
    if (!isPlaying) {
      setPreviousGuesses([...previousGuesses, "SKIPPED"]);
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
    <form onSubmit={handleSubmit}>
      <input type="text" value={titleGuess} onChange={handleChange} />
      <div id="guess-buttons">
        <button type="submit" id="submit">
          SUBMIT
        </button>
        <button
          type="button"
          onClick={handleClick}
          disabled={isPlaying}
          id="skip"
        >
          SKIP (+5s)
        </button>
      </div>
    </form>
  );
};

export default Search;
