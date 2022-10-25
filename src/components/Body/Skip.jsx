const Skip = ({ isPlaying, setPreviousGuesses, previousGuesses }) => {
  function handleClick() {
    if (!isPlaying) {
      setPreviousGuesses([...previousGuesses, "SKIPPED"]);
    }
  }

  return (
    <button type="button" onClick={handleClick} disabled={isPlaying}>
      SKIP (+5s)
    </button>
  );
};

export default Skip;
