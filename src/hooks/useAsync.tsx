import { AxiosResponse } from "axios";
import { useEffect, useReducer } from "react";
import { ApiStatusReducer } from "./reducer/ApiReducer";

interface AsyncProps<T> {
  callback: (param?: any) => Promise<T>;
  deps?: [];
  mutate: boolean;
}

const useAsync = function <T>({ callback, deps = [], mutate }: AsyncProps<T>) {
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
    if (!mutate) fetchData();
  }, deps);

  return [state, fetchData];
};

export default useAsync;
