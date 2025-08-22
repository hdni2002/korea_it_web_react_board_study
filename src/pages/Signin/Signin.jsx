/** @jsxImportSource @emotion/react */
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import AuthInput from "../../components/AuthInput/AuthInput";
import * as s from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signinRequest } from "../../apis/auth/authApis";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signupOnClickHandler = () => {
    navigate("/auth/signup");
  };

  const signinOnClickHandler = () => {
    if (username.trim().length === 0 || password.trim().length === 0) {
      alert("아이디 또는 비밀번호를 입력해주세요");
      return;
    }

    // 로그인 API 요청
    signinRequest({
      username: username,
      password: password,
    })
      .then((response) => {
        console.log(response.data);

        if (response.data.status === "success") {
          alert(response.data.message);
          console.log(response.data);
          if (response.data.data) {
            localStorage.setItem("accessToken", response.data.data);
          }

          navigate("/"); // 홈으로 이동
        } else if (response.data.status === "failed") {
          alert(response.data.message);
        }
      })
      .catch(() => {
        alert("로그인 중 문제가 발생했습니다.");
      });
  };

  // JSX 반환
  return (
    <div css={s.container}>
      <h1>로그인</h1>
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
        </div>

        <div css={s.signinBtnBox}>
          <button className="signup" onClick={signupOnClickHandler}>
            회원가입
          </button>
          <button className="signin" onClick={signinOnClickHandler}>
            로그인
          </button>
        </div>

        <div css={s.oauthBtnBox}>
          <button className="google">
            <FcGoogle size={20} />
            <span>구글로 로그인</span>
          </button>
          <button className="naver">
            <SiNaver size={16} color="#03C75A" />
            <span>네이버로 로그인</span>
          </button>
          <button className="kakao">
            <RiKakaoTalkFill size={20} color="#FEE500" />
            <span>카카오로 로그인</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
