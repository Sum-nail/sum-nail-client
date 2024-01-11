import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string;
      grayF7: string;
      grayF2: string;
      grayD9: string;
      gray91: string;
      gray69: string;
      black: string;
      pink_dark: string;
      pink_pop: string;
      pink_pale: string;
      pink_warm: string;
      pink_light: string;
      mint: string;
      green: string;
      pink_light_button: string;
    };
    fonts: {
      T16_500: SerializedStyles;
      T16_600: SerializedStyles;
      B56: SerializedStyles;
      B24: SerializedStyles;
      M20: SerializedStyles;
      B18: SerializedStyles;
      B17_2: SerializedStyles;
      B15_1: SerializedStyles;
      SB15_2: SerializedStyles;
      M15_2: SerializedStyles;
      R15_2: SerializedStyles;
      SB13_2: SerializedStyles;
      M13_2: SerializedStyles;
      R13_2: SerializedStyles;
      R11_2: SerializedStyles;
    };
  }
}
