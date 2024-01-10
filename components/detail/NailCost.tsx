import { CreditCardIcon } from '@/public/icons';
import styled from '@emotion/styled';
import React from 'react';

function NailCost() {
  return (
    <NailCostContainer>
      <NailCostTitleWrapper>
        <CreditCardIcon />
        <NailCostText>네일 기본 가격표</NailCostText>
      </NailCostTitleWrapper>
      <CostListTextWrapper>
        <TextWrapper>
          <CareText>손 기본 케어</CareText>
          <CostText>20,000 원</CostText>
        </TextWrapper>
        <TextWrapper>
          <CareText>손 젤</CareText>
          <CostText>20,000 원</CostText>
        </TextWrapper>
        <TextWrapper>
          <CareText>손 기본 케어</CareText>
          <CostText>20,000 원</CostText>
        </TextWrapper>
        <TextWrapper>
          <CareText>손 젤</CareText>
          <CostText>20,000 원</CostText>
        </TextWrapper>
        <TextWrapper>
          <CareText>손 기본 케어</CareText>
          <CostText>20,000 원</CostText>
        </TextWrapper>
        <TextWrapper>
          <CareText>손 젤</CareText>
          <CostText>20,000 원</CostText>
        </TextWrapper>
      </CostListTextWrapper>
    </NailCostContainer>
  );
}

export default NailCost;

const CostListTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.6rem;
`;

const CareText = styled.p`
  color: ${({ theme }) => theme.colors.gray69};
  ${({ theme }) => theme.fonts.M15_2};
  margin-left: 2.4rem;
`;
const CostText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.B15_1};
  margin-right: 2.4rem;
`;

const NailCostContainer = styled.div`
  padding: 2.4rem;
  border-bottom: 8px solid ${({ theme }) => theme.colors.grayF7};
`;

const NailCostTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 3.3rem 0 1.6rem 0.8rem;
`;

const NailCostText = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.T16_600};
  margin-left: 0.4rem;
`;
