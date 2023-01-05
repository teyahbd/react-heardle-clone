const Result = ({ trackData, isCorrect, setPreviousGuesses, setIsCorrect }) => {
  function handleClick() {
    setPreviousGuesses([]);
    setIsCorrect(false);
  }

  return (
    <main id="result-page">
      <img src={trackData[2]} alt="album cover" />
      <h3 id="song-title">{trackData[0]}</h3>
      <h3 id="song-artist">{trackData[1]}</h3>
      {isCorrect ? <h2>You got it!</h2> : <h2>Better luck next time!</h2>}
      <button id="restart-button" onClick={handleClick}>
        PLAY AGAIN
      </button>
    </main>
  );
};

export default Result;
