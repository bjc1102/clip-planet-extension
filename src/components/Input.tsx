import React from "react";
import "./input.scss";

const Input = () => {
  const [key, setKey] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKey(e.currentTarget.value);

  console.log(key);

  return (
    <>
      <h1 className="form__title">API Key를 입력해주세요</h1>
      <div className="form__group field">
        <input
          type="input"
          onChange={onChange}
          className="form__field"
          placeholder="API Key"
          name="api key"
          id="api key"
          required
        />
        <label className="form__label">API Key</label>
      </div>
      <button disabled={!key.length} className="btn__submit">
        저장하기
      </button>
    </>
  );
};

export default Input;
