const Skip = ({ previousGuesses, setPreviousGuesses, isCorrect }) => {
  function handleClick() {
    setPreviousGuesses([...previousGuesses, "SKIPPED"]);
  }
  return (
    <>
      <button type="button" onClick={handleClick} disabled={isCorrect}>
        SKIP (+5s)
      </button>
    </>
  );
};

export default Skip;
