import React from "react";
import axios from "axios";
import validUrl from "valid-url";
import KeyButton from "../KeyButton";
import "./index.scss";
import AlertIcon from "../assets/AlertIcon";

interface MainProps {
  API_KEY: string;
  handleAPI_KEY: (key: string) => void;
}

interface CurrentTab {
  title: string;
  currentUrl: string;
  favicon: string;
}

const Main = ({ API_KEY, handleAPI_KEY }: MainProps) => {
  const [currentTab, setCurrentTab] = React.useState<CurrentTab>({
    title: "",
    currentUrl: "",
    favicon: "",
  });

  const deleteAPI_KEY = () => {
    chrome.storage.local.remove("API_KEY").then(() => {
      handleAPI_KEY("");
    });
  };

  React.useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setCurrentTab({
        title: tabs[0].title ?? "",
        currentUrl: tabs[0].url ?? "",
        favicon: tabs[0].favIconUrl ?? "",
      });
    });
    //   axios
    //     .post("http://localhost:5000/api/sites/set/extension/clip", {
    //       api_key: API_KEY,
    //       siteURL: url,
    //     })
    //     .then((response) => console.log(response));
  }, []);
  if (!currentTab.currentUrl)
    return <h1 className="error__text">올바른 사이트 주소가 아닙니다.</h1>;

  return (
    <>
      <div onClick={deleteAPI_KEY} className="alert__wrapper">
        <KeyButton />
      </div>
      <div className="tab__content">
        {validUrl.isWebUri(currentTab.favicon) ? (
          <img src={currentTab.favicon} />
        ) : (
          <AlertIcon />
        )}
        <h3>{currentTab.title}</h3>
        <div>
          <button className="tab__content_save">클립하기</button>
        </div>
      </div>
    </>
  );
};

export default Main;
