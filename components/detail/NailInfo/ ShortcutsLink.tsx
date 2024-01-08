'use client';
import { PersonIcon, ClockIcon, CalendarIcon } from '@/public/icons';
import styled from '@emotion/styled';

function ShortcutsLink() {
  return (
    <ShortcutsLinkContainer>
      <BoxStyle>
        <PersonIcon />
        <PersonCountText>4인샵</PersonCountText>
      </BoxStyle>

      <BoxStyle>
        <ClockIcon />
        <BoldText>영업시간</BoldText>
      </BoxStyle>

      <BoxStyle>
        <CalendarIcon />
        <BoldText>예약 현황표</BoldText>
      </BoxStyle>
    </ShortcutsLinkContainer>
  );
}

export default ShortcutsLink;

const BoldText = styled.p`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.SB13_2};
`;

const PersonCountText = styled.p`
  margin-top: 0.3rem;
  color: ${({ theme }) => theme.colors.gray69};
  ${({ theme }) => theme.fonts.R13_2};
`;

const BoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 11.4rem;
  height: 8.1rem;

  border: 1px solid ${({ theme }) => theme.colors.grayF2};

  margin-bottom: 5.7rem;
`;

const ShortcutsLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 3.05rem;
  border-bottom: 8px solid ${({ theme }) => theme.colors.grayF7};
`;
