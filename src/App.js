import "./App.css";
import Header from "./components/Header/Header";
import Container from "./components/Body";
import Authenticator from "./components/Authenticator";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      <Header />
      <Authenticator token={token} setToken={setToken} />
      <hr />
      <Body token={token} />
    </div>
  );
}

export default App;
