import axios from "axios";

const spotifyApi = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

export const fetchSong = (song_id, token) => {
  return spotifyApi.get(`/tracks/${song_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchGuessSuggestions = (query, token) => {
  return spotifyApi.get(`search?q=${query}&type=track&limit=5`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
