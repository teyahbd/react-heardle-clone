import { useEffect } from "react";
import * as spotifyApi from "../../api";
import Autosuggest from "react-autosuggest/dist/Autosuggest";

//https://www.npmjs.com/package/react-autosuggest

const Options = ({ titleGuess, token, setGuessOptions, guessOptions }) => {
  useEffect(() => {
    if (titleGuess.length > 3) {
      const query = titleGuess.split(" ").join("%20");

      spotifyApi.fetchGuessSuggestions(query, token).then(
        ({
          data: {
            tracks: { items },
          },
        }) => {
          setGuessOptions([
            `${items[0].name} - ${items[0].artists[0].name}`,
            `${items[1].name} - ${items[1].artists[0].name}`,
            `${items[2].name} - ${items[2].artists[0].name}`,
            `${items[3].name} - ${items[3].artists[0].name}`,
            `${items[4].name} - ${items[4].artists[0].name}`,
          ]);
        }
      );
    }
  }, [titleGuess]);

  return (
    <div>
      <div>{guessOptions[0]}</div>
      <div>{guessOptions[1]}</div>
      <div>{guessOptions[2]}</div>
      <div>{guessOptions[3]}</div>
      <div>{guessOptions[4]}</div>
    </div>
  );
};

export default Options;
