import React from "react";
import "./input.scss";

const Input = () => {
  const [key, setKey] = React.useState("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setKey(e.currentTarget.value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(key);
  }

  return (
    <>
      <h1 className="form__title">API Key를 입력해주세요</h1>
      <form onSubmit={handleSubmit} className="form__group">
        <input
          type="input"
          onChange={handleChange}
          className="form__field"
          placeholder="API Key"
          name="ApiKey"
          required
        />
        <label className="form__label">API Key</label>
        <button type="submit" disabled={!key.length} className="btn__submit">
          저장하기
        </button>
      </form>
    </>
  );
};

export default Input;
