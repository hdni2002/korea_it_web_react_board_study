/** @jsxImportSource @emotion/react */
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import AuthInput from "../../components/AuthInput/AuthInput";
import * as s from "./styles";

function Signin() {
  return (
    <div css={s.container}>
      <h1>로그인</h1>
      <div css={s.box}>
        <div css={s.inputBox}>
          <AuthInput type="text" placeholder="아이디" />
          <AuthInput type="password" placeholder="비밀번호" />
        </div>
        <div css={s.signinBtnBox}>
          <button className="signup">회원가입</button>
          <button className="signin">로그인</button>
        </div>
        <div css={s.oauthBtnBox}>
          <button className="google">
            <FcGoogle size={20} />
            <span>구글로 로그인</span>
          </button>
          <button className="naver">
            <SiNaver size={18} color="#03C75A" />
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
