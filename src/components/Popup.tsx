import React from "react";

type Props = {};

const Popup = (props: Props) => {
  // url 검증 정규표현식
  const reg =
    /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/gi;

  return <div>Popup</div>;
};

export default Popup;
