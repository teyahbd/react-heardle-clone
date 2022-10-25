import { useEffect } from "react";

const Form = ({
  songTitle,
  guessedTitle,
  setGuessedTitle,
  setPreviousGuesses,
  previousGuesses,
  correctAnswer,
  setCorrectAnswer,
  isCorrect,
  setIsCorrect,
  setIsSkipDisabled,
  albumURL,
  artist,
  token,
  setAlbumURL,
  suggestions,
  setSuggestions,
}) => {
  function handleChange(event) {
    if (!isCorrect) {
      setGuessedTitle(event.target.value);
    }
  }

  useEffect(() => {
    if (guessedTitle.length > 3 && !isCorrect) {
      const noSpaces = guessedTitle.split(" ").join("%20");
      fetch(
        `https://api.spotify.com/v1/search?q=${noSpaces}&type=track&limit=3`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then(({ tracks: { items } }) => {
          setSuggestions([
            `${items[0].name} - ${items[0].artists[0].name}`,
            `${items[1].name} - ${items[1].artists[0].name}`,
            `${items[2].name} - ${items[2].artists[0].name}`,
          ]);
        });
    }
  }, [guessedTitle]);

  useEffect(() => {
    fetch(
      "https://api.spotify.com/v1/search?q=walking%20on%20sunshine&type=track&limit=10",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAlbumURL(data.tracks.items[0].album.images[0].url);
      });
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (guessedTitle.length < 1) {
    } else if (previousGuesses.length > 4) {
      setCorrectAnswer(`The correct answer is... ${songTitle}`);
    } else if (guessedTitle.toLowerCase() === songTitle.toLowerCase()) {
      setPreviousGuesses([...previousGuesses, `${songTitle}`]);
      setCorrectAnswer(`The correct answer is... ${songTitle}`);
      setIsCorrect(true);
      setIsSkipDisabled(true);
    } else {
      setPreviousGuesses([...previousGuesses, `❌ ${guessedTitle}`]);
    }
    setGuessedTitle("");
    setSuggestions(["", "", ""]);
  }

  return (
    <div>
      <div>{suggestions[0]}</div>
      <div>{suggestions[1]}</div>
      <div>{suggestions[2]}</div>
      <form onSubmit={handleSubmit}>
        <label>Submit your guess below:</label>
        <br />
        <input type="text" value={guessedTitle} onChange={handleChange} />
        <br />
        <button type="submit" disabled={isCorrect}>
          Submit
        </button>
      </form>
      {isCorrect ? (
        <div>
          <h3>Today's answer is...</h3>
          <img src={albumURL} width="100px" alt="album cover" />
          <p>{`${songTitle} by ${artist}`}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Form;
