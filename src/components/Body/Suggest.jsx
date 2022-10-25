import { useEffect } from "react";

const Suggest = ({ titleGuess, token, setSuggestions, suggestions }) => {
  useEffect(() => {
    if (titleGuess.length > 3) {
      const noSpaces = titleGuess.split(" ").join("%20");
      fetch(
        `https://api.spotify.com/v1/search?q=${noSpaces}&type=track&limit=5`,
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
            `${items[3].name} - ${items[3].artists[0].name}`,
            `${items[4].name} - ${items[4].artists[0].name}`,
          ]);
        });
    }
  }, [titleGuess]);
  return (
    <div>
      <div>{suggestions[0]}</div>
      <div>{suggestions[1]}</div>
      <div>{suggestions[2]}</div>
      <div>{suggestions[3]}</div>
      <div>{suggestions[4]}</div>
    </div>
  );
};

export default Suggest;
