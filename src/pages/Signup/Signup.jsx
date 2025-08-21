/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import AuthInput from "../../components/AuthInput/AuthInput";
import * as s from "./styles";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessasge, setErrorMessage] = useState({});

  const signupOnClickHandler = () => {
    if (
      username.trim().length === 0 ||
      password.trim().length === 0 ||
      confirmPassword.trim().length === 0 ||
      email.trim().length === 0
    ) {
      alert("모든 항목을 입력해주세요");
      return;
    }
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 회원가입 요청 API
  };

  useEffect(() => {
    const newErrorMessage = {};
    if (password.length > 0) {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
      if (!passwordRegex.test(password)) {
        newErrorMessage.password =
          "비밀번호는 8~16자, 숫자/영문/특수문자 포함해야 합니다.";
      }
    }

    if (email.length > 0) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
      if (!emailRegex.test(email)) {
        newErrorMessage.email = "이메일 형식에 맞게 입력해주세요.";
      }
    }
    setErrorMessage(newErrorMessage);
  }, [password, email]);
  return (
    <div css={s.container}>
      <h1>회원가입</h1>
      <div css={s.box}>
        <div css={s.inputBox}>
          <AuthInput
            type="text"
            placeholder="아이디"
            state={username}
            setState={setUsername}
          />
          <AuthInput
            type="password"
            placeholder="비밀번호"
            state={password}
            setState={setPassword}
          />
          <AuthInput
            type="password"
            placeholder="비밀번호 확인"
            state={confirmPassword}
            setState={setConfirmPassword}
          />
          <AuthInput
            type="email"
            placeholder="이메일"
            state={email}
            setState={setEmail}
          />
        </div>
        <div css={s.errorBox}>
          <div css={s.errorBox}>
            <ul>
              {errorMessasge.password && <li>{errorMessasge.password}</li>}
              {errorMessasge.email && <li>{errorMessasge.email}</li>}
            </ul>
          </div>
        </div>
        <div css={s.btnBox}>
          <button onClick={signupOnClickHandler}>가입하기</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
