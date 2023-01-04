import "./App.css";
import Body from "./components/Body";
import InfoButton from "./components/InfoButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";

function App() {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const client_id = process.env.REACT_APP_CLIENT_ID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;

  useEffect(() => {
    axios({
      method: "post",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization:
          "Basic " +
          new Buffer.from(client_id + ":" + client_secret).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        grant_type: "client_credentials",
      },
      json: true,
    })
      .then((body) => {
        console.log(body.data.access_token);
        setToken(body.data.access_token);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div id="header">
        <InfoButton type="info" />
        <h1>Heardle</h1>
        <InfoButton type="help" />
      </div>
      <hr />
      <Body token={token} />
    </div>
  );
}

export default App;
