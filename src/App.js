import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");
  const [isStart, setIsStart] = useState(false);

  const CLIENT_ID = "1ba3bbc285f84064a3bacc35e2106001";
  const REDIRECT_URI = "https://react-heardle-clone.herokuapp.com";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  window.localStorage.removeItem("token");
  const hash = window.location.hash;
  let authToken = window.localStorage.getItem("token");

  if (!authToken && hash) {
    authToken = hash
      .substring(1)
      .split("&")
      .find((element) => element.startsWith("access_token"))
      .split("=")[1];

    window.location.hash = "";
    window.localStorage.setItem("token", authToken);
    setToken(authToken);
  }

  return (
    <div className="App">
      <Header />
      <hr />
      {token ? (
        <Body
          token={token}
          setToken={setToken}
          isStart={isStart}
          setIsStart={setIsStart}
        />
      ) : (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          <button id="start-button">START</button>
        </a>
      )}
    </div>
  );
}

export default App;
