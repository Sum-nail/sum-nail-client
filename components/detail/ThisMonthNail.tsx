import React from 'react';
import ImageCarousel from './ImageCarousel';
import styled from '@emotion/styled';
import { DetailMapPinIcon } from '@/public/icons';

function ThisMonthNail() {
  return (
    <div>
      <ThisMonthNailTitleWrapper>
        <DetailMapPinIcon />
        <ThisMonthNailText>이달의 네일</ThisMonthNailText>
      </ThisMonthNailTitleWrapper>
      <ImageWrapper>
        <ImageCarousel />
      </ImageWrapper>
    </div>
  );
}

export default ThisMonthNail;

const ImageWrapper = styled.div`
  margin-bottom: 18.5rem;
`;

const ThisMonthNailTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 3.3rem 0 1.6rem 0.8rem;
`;

const ThisMonthNailText = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.T16_600};
  margin-left: 0.4rem;
`;
