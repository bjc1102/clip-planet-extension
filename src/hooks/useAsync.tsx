import { AxiosResponse } from "axios";
import { useEffect, useReducer } from "react";
import { ApiStatusReducer } from "./reducer/ApiReducer";

interface AsyncProps {
  callback: <T, P>(param?: P) => Promise<AxiosResponse<T, any>>;
  deps: [];
}

const useAsync = function ({ callback, deps = [] }: AsyncProps) {
  const [state, dispatch] = useReducer(ApiStatusReducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return [state, fetchData];
};

export default useAsync;
