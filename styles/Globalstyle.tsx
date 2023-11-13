import { css, Global } from '@emotion/react';

const style = css`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  :root {
    -webkit-tap-highlight-color: transparent; // 모바일 클릭시 검은 영역 사라짐
    -webkit-text-size-adjust: 100%; // 모바일에서도 폰트 크기 똑같이 출력
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    -moz-tab-size: 4;
    tab-size: 4;
  }
  html {
    font-size: 62.5%;
  }
  body {
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    margin: 0 auto;
    position: relative;
    background-color: #ffffff;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button {
    border: none;
    border-radius: 0;
    box-shadow: none;
    background: inherit;
    cursor: pointer;
    padding: 0;
    overflow: visible;
  }
  a,
  a:visited {
    text-decoration: none;
    color: black;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
