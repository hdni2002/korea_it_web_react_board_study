/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import Header from "../Header/header";

function Layout({ children }) {
  return (
    <div css={s.layout}>
      <Header />
      <div css={s.mainContainer}>{children}</div>
    </div>
  );
}

export default Layout;
