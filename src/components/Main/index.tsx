import React from "react";
import axios from "axios";
import validUrl from "valid-url";
import PlanetIcon from "../assets/PlanetIcon";
import AlertIcon from "../assets/AlertIcon";
import { baseURL } from "../../constants/default";

import "./index.scss";
import useAsync from "../../hooks/useAsync";
import CurrentTab from "../../types/tab";
import createClip from "./queries/createClip";

interface MainProps {
  API_KEY: string;
  handleAPI_KEY: (key: string) => void;
}

const Main = ({ API_KEY, handleAPI_KEY }: MainProps) => {
  const [currentTab, setCurrentTab] = React.useState<CurrentTab>({
    title: "",
    currentUrl: "",
    favicon: "",
  });
  const [state, refetch] = useAsync<CurrentTab>({
    callback: createClip(API_KEY),
    mutate: true,
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
  }, []);

  if (!currentTab.currentUrl)
    return (
      <>
        <div className="icon_wrapper">
          <PlanetIcon />
        </div>
        <h1 className="error_text">현재 주소 형식이 올바르지 않습니다.</h1>
      </>
    );

  return (
    <>
      <div onClick={deleteAPI_KEY} className="alert_wrapper">
        <div className="icon_wrapper">
          <AlertIcon />
        </div>
        <span>API KEY 삭제하기</span>
      </div>
      <div className="tab_content">
        {validUrl.isWebUri(currentTab.favicon) ? (
          <img src={currentTab.favicon} />
        ) : (
          <div className="icon_wrapper">
            <PlanetIcon />
          </div>
        )}
        <h3>{currentTab.title}</h3>
        <div>
          <button onClick={() => refetch} className="save_button">
            클립하기
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
