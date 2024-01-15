'use client';
import styled from '@emotion/styled';
import React, { Dispatch, SetStateAction } from 'react';

interface LongBottomButtonProps {
  buttonText: string;
  borderRadius: string;
  backgroundColor: string;
  buttonHandler: () => void;
}

const LongBottomButton = ({ buttonText, buttonHandler, borderRadius, backgroundColor }: LongBottomButtonProps) => {
  return (
    <ButtonContainer>
      <Button onClick={buttonHandler} borderRadius={borderRadius} backgroundColor={backgroundColor}>
        {buttonText}
      </Button>
    </ButtonContainer>
  );
};

export default LongBottomButton;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 1.6rem;
`;

const Button = styled.button<{ borderRadius: string; backgroundColor: string }>`
  width: 35.8rem;
  height: 5.6rem;
  ${({ theme }) => theme.fonts.SB15_2};
  background-color: ${(props) => props.backgroundColor || '#FF7BD2'};
  border-radius: ${(props) => props.borderRadius || '0.8rem'};
  color: ${({ theme }) => theme.colors.white};
`;
