'use client';
import { CreditCardIcon } from '@/public/icons';
import styled from '@emotion/styled';

function NailCost() {
  return (
    <NailCostContainer>
      <TitleWrapper>
        <CreditCardIcon />
        <Title>이달의 네일 가격대</Title>
      </TitleWrapper>
      <CostText>80,000원 ~ 120,000원</CostText>
    </NailCostContainer>
  );
}

export default NailCost;

const NailCostContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0.4rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  margin-left: -2rem;
`;

const CostText = styled.p`
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.colors.gray69};
  ${({ theme }) => theme.fonts.T16_500};
`;

const Title = styled.h1`
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.T16_600};
`;
