import "./App.css";
import Header from "./components/Header";
import SongContainer from "./components/SongContainer";
import { useEffect, useState } from "react";

function App() {
  const CLIENT_ID = "1ba3bbc285f84064a3bacc35e2106001";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };
  ////////////////////////////////////////

  const [albumURL, setAlbumURL] = useState("");

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

  return (
    <div className="App">
      <Header />
      <hr />
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
      <SongContainer
        albumURL={albumURL}
        token={token}
        setAlbumURL={setAlbumURL}
      />
    </div>
  );
}

export default App;
