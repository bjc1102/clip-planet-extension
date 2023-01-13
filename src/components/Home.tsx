import React from "react";
import "./Home.scss";

interface HomeProps {
  url?: string;
  API_KEY: string;
}

const Home = ({ url, API_KEY }: HomeProps) => {
  if (!url)
    return <h1 className="error__text">올바른 사이트 주소가 아닙니다.</h1>;

  return <h1 className="success__text">클립하였습니다!</h1>;
};

export default Home;
