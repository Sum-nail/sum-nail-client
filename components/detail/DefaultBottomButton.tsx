'use client';

import styled from '@emotion/styled';
import { useState } from 'react';
import ModalPortal from '../common/ModalPotal';
import LoginModal from '../common/LoginModal';

function DefaultBottomButton() {
  const [isModal, setIsModal] = useState(false);

  const hadleOnCloseModal = () => {
    setIsModal(false);
  };

  const hadleOnResevationClick = () => {
    setIsModal(true);
  };

  return (
    <>
      <BottomButtonContainer>
        <GoReservationButton onClick={hadleOnResevationClick}>네일샵 예약하기</GoReservationButton>
        <GoMonthNail>인스타 구경하기</GoMonthNail>
      </BottomButtonContainer>
      {isModal && (
        <ModalPortal>
          <LoginModal hadleOnCloseModal={hadleOnCloseModal} />
        </ModalPortal>
      )}
    </>
  );
}

export default DefaultBottomButton;

const BottomButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 1.6rem;
`;

const GoReservationButton = styled.button`
  width: 17.5rem;
  height: 5.6rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.pink_pop};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.M15_2};
`;

const GoMonthNail = styled.button`
  width: 17.5rem;
  height: 5.6rem;

  margin-left: 0.8rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.pink_light_button};
  color: ${({ theme }) => theme.colors.pink_pop};
  ${({ theme }) => theme.fonts.M15_2};
`;
