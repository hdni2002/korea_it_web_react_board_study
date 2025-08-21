/** @jsxImportSource @emotion/react */
import * as s from "./styles";

function AuthInput({ type, placeholder, onChangeHandler }) {
  return (
    <>
      <input
        css={s.input}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </>
  );
}

export default AuthInput;
