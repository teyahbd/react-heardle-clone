const PlayButton = ({
  skipCount,
  isCorrect,
  audio,
  isPlaying,
  setIsPlaying,
}) => {
  function pauseAudio() {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  }

  function handleClick() {
    if (isCorrect) {
      audio.play();
    } else if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
      setTimeout(pauseAudio, 1000 + skipCount * 1000);
    }
  }
  return (
    <button
      disabled={isPlaying}
      onClick={handleClick}
      className={isPlaying ? "play-button paused" : "play-button"}
    ></button>
  );
};

export default PlayButton;
