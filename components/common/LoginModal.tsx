import styled from '@emotion/styled';
import React from 'react';
import LongBottomButton from './LongBottomButton';
import { css, keyframes } from '@emotion/react';

interface ModalProps {
  hadleOnCloseModal: () => void;
}

function LoginModal(props: ModalProps) {
  const { hadleOnCloseModal } = props;

  const handleOnLoginClick = () => {
    alert('로그인창 뾰룡');
  };

  return (
    <div>
      <ModalContainer onClick={hadleOnCloseModal}>
        <ModalWrapper>
          <LogInTitle>로그인</LogInTitle>
          <ModalTextWrapper>
            <LogInText>로그인이 필요한 기능입니다.</LogInText>
            <LogInText>카카오톡이나 구글로 간편하게 로그인할 수 있어요.</LogInText>
          </ModalTextWrapper>
          <>
            <LongBottomButton
              borderRadius={'8px'}
              buttonHandler={handleOnLoginClick}
              backgroundColor="#FF7BD2"
              buttonText={'간편 로그인하기'}
            />
          </>
        </ModalWrapper>
      </ModalContainer>
    </div>
  );
}

export default LoginModal;

const ModalTextWrapper = styled.div`
  margin-top: 4.3rem;
  text-align: start;
`;

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  input {
    &:focus {
      outline: none;
    }
  }
`;

//애니메이션
export const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
 }
  to {
    opacity: 1;
    transform: translateZ(0);
 }
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;

  bottom: 0;

  border-radius: 3.2rem 3.2rem 0rem 0rem;
  width: 39rem;
  height: 26.6rem;
  background-color: ${({ theme }) => theme.colors.white};

  animation: ${FadeIn} 0.7s ease-in-out;
`;

const LogInTitle = styled.h1`
  margin-top: 3.6rem;
  color: ${({ theme }) => theme.colors.gray69};
  ${({ theme }) => theme.fonts.B18};
`;

const LogInText = styled.p`
  color: ${({ theme }) => theme.colors.gray69};
  ${({ theme }) => theme.fonts.R15_2};
  margin-bottom: 0.8rem;
`;
