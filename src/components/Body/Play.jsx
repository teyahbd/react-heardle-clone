const Play = ({ skipCount, isCorrect, audio, isPlaying, setIsPlaying }) => {
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
      setTimeout(pauseAudio, 5000 + skipCount * 5000);
    }
  }
  return (
    <a disabled={isPlaying} onClick={handleClick} class="wrap">
      <div class="circle"></div>
    </a>
  );
};

export default Play;
