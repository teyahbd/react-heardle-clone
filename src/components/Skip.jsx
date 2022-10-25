const Skip = ({
  previousGuesses,
  setPreviousGuesses,
  isPlaying,
  isSkipDisabled,
}) => {
  function handleClick() {
    if (!isPlaying) {
      setPreviousGuesses([...previousGuesses, "SKIPPED"]);
    }
  }
  return (
    <>
      <button type="button" onClick={handleClick} disabled={isSkipDisabled}>
        SKIP (+5s)
      </button>
    </>
  );
};

export default Skip;
