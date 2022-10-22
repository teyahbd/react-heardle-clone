import audio from "./sunshine.mp3";

const Player = ({ songAudio }) => {
  const audioElement = new Audio(audio);

  function pauseAudio() {
    audioElement.pause();
    console.log(audioElement.currentTime);
  }

  function handleClick() {
    audioElement.play();
    setTimeout(pauseAudio, 5000);
  }
  return (
    <div>
      <button onClick={handleClick}>Play</button>
    </div>
  );
};

export default Player;
