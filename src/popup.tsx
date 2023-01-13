import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Input from "./components/Input";
import "./index.scss";

const Popup = () => {
  const [currentURL, setCurrentURL] = useState<string>();
  const [API_Key, setAPI_Key] = useState("");

  function handleAPI_KEY(key: string) {
    setAPI_Key(key);
  }

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setCurrentURL(tabs[0].url);
    });
    chrome.storage.local.get("API_KEY").then((response) => {
      setAPI_Key(response.API_KEY);
    });
  }, []);

  if (!API_Key) return <Input handleAPI_KEY={handleAPI_KEY} />;
  return <Home API_KEY={API_Key} url={currentURL} />;
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
