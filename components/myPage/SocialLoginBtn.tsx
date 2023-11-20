//마이페이지 입니다!
'use client';
import { KakaoIcon } from '@/public/icons';
import { GoogleIcon } from '@/public/icons';
import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface IconBtnProps {
  social: 'kakao' | 'google';
  txt?: string;
}
const ButtonContainer = styled.button<IconBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: 100%;
  height: 5.6rem;
  border-radius: 0.8rem;
  color: ${theme.colors.black};
  ${({ social }) => {
    if (social === 'kakao') {
      return css`
        background-color: ${theme.colors.yellowFE};
      `;
    } else
      return css`
        background-color: white;
        filter: drop-shadow(0rem 0rem 0.4rem rgba(0, 0, 0, 0.1));
      `;
  }}
`;
const ButtonTxt = styled.h3`
  ${theme.fonts.M14_1}
`;

export default function SocialLoginBtn({ social, txt }: IconBtnProps) {
  return (
    <ButtonContainer social={social}>
      {social === 'kakao' ? <KakaoIcon /> : <GoogleIcon />}
      <ButtonTxt>{txt}</ButtonTxt>
    </ButtonContainer>
  );
}
