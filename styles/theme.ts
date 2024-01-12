import { Theme, css } from '@emotion/react';

const colors = {
  white: '#ffffff',
  grayF7: '#f7f7f7',
  grayF2: '#f2f2f2',
  grayD9: '#d9d9d9',
  grayE5: '#E5E5E5',
  pinkFF: '#ff64c1',
  gray91: '#919191',
  gray69: '#696969',
  black: '#000000',
  pink_dark: '#E577C0',
  pink_pop: '#ff7bdc',
  pink_pale: '#FCEDF6',
  pink_warm: '#ff95c8',
  pink_light: '#ff99d6',
  mint: '#57c4d3',
  green: '#28d678',
  yellowFE: '#FEE500',
};

const fonts = {
  B56: css`
    font-family: Pretendard;
    font-size: 5.6rem;
    font-style: normal;
    font-weight: 900;
    line-height: 136.336%;
    font-style: normal;
  `,
  B24: css`
    font-family: Pretendard;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.3rem; /* 137.5% */
    letter-spacing: -0.024rem;
    font-style: normal;
  `,
  M20: css`
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 136%; /* 2.72rem */
    letter-spacing: -0.02rem;
    font-style: normal;
  `,
  B18: css`
    font-family: Pretendard;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-style: normal;
  `,
  B17_2: css`
    font-family: Pretendard;
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.034rem;
    font-style: normal;
  `,
  B15_1: css`
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-style: normal;
  `,
  SB15_2: css`
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.026rem;
    font-style: normal;
  `,
  M14_1: css`
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.03rem;
    font-style: normal;
  `,
  M15_2: css`
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.03rem;
    font-style: normal;
  `,
  R15_2: css`
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.03rem;
    font-style: normal;
  `,
  SB13_2: css`
    font-family: Pretendard;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.026rem;
    font-style: normal;
  `,
  M13_2: css`
    font-family: Pretendard;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.026rem;
    font-style: normal;
  `,
  R14: css`
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-style: normal;
  `,
  R13_2: css`
    font-family: Pretendard;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.026rem;
    font-style: normal;
  `,
  R11_2: css`
    font-family: Pretendard;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.022rem;
    font-style: normal;
  `,
};

const theme: Theme = { colors, fonts };

export default theme;
