import { ClockIcon } from '@/public/icons';
import styled from '@emotion/styled';
import React from 'react';

function OpeningHour() {
  return (
    <OpeningHourContainer>
      <OpeningTitleWrapper>
        <ClockIcon />
        <OpeningText>영업시간</OpeningText>
      </OpeningTitleWrapper>
      <HourTextWrapper>
        <TextWrapper>
          <OpenDayText>주중(월수목금)</OpenDayText>
          <OpenText>10:00 - 20:00시</OpenText>
        </TextWrapper>
        <TextWrapper>
          <OpenDayText>주말</OpenDayText>
          <OpenText>10:00 - 20:00시</OpenText>
        </TextWrapper>
        <TextWrapper>
          <CloseDayText>화, 공휴일</CloseDayText>
          <CloseText>휴무</CloseText>
        </TextWrapper>
      </HourTextWrapper>
    </OpeningHourContainer>
  );
}

export default OpeningHour;

const HourTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.6rem;
`;

const CloseDayText = styled.p`
  color: ${({ theme }) => theme.colors.pink_pop};
  ${({ theme }) => theme.fonts.R15_2};
  margin-left: 2.4rem;
`;

const CloseText = styled.p`
  color: ${({ theme }) => theme.colors.pink_pop};
  ${({ theme }) => theme.fonts.R15_2};
  margin-right: 2.4rem;
`;

const OpenDayText = styled.p`
  color: ${({ theme }) => theme.colors.gray69};
  ${({ theme }) => theme.fonts.R15_2};
  margin-left: 2.4rem;
`;
const OpenText = styled.p`
  color: ${({ theme }) => theme.colors.gray69};
  ${({ theme }) => theme.fonts.R15_2};
  margin-right: 2.4rem;
`;

const OpeningHourContainer = styled.div`
  padding: 2.4rem;
  border-bottom: 0.8rem solid ${({ theme }) => theme.colors.grayF7};
`;

const OpeningTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 3.3rem 0 1.6rem 0.8rem;
`;

const OpeningText = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.T16_600};
  margin-left: 0.4rem;
`;
