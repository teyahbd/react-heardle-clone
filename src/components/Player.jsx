const Player = ({
  skipCount,
  isCorrect,
  audio,
  isPlaying,
  setIsPlaying,
  setIsSkipDisabled,
}) => {
  function pauseAudio() {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setIsSkipDisabled(false);
  }

  function handleClick() {
    if (isCorrect) {
      audio.play();
    } else if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
      setIsSkipDisabled(true);
      setTimeout(pauseAudio, 5000 + skipCount * 5000);
    }
  }
  return (
    <div>
      <button type="button" disabled={isPlaying} onClick={handleClick}>
        Play
      </button>
    </div>
  );
};

export default Player;
