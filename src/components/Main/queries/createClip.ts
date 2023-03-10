import axios from "axios";
import { baseURL } from "../../../constants/default";
import CurrentTab from "../../../types/tab";

const createClip = (API_KEY: string, siteURL: string) =>
  async function () {
    const result = await axios.post<CurrentTab>(
      `${baseURL}/set/extension/clip`,
      {
        api_key: API_KEY,
        siteURL: siteURL,
      }
    );
    return result.data;
  };

export default createClip;
