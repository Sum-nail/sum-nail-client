'use client';

import styled from '@emotion/styled';
import React from 'react';
import ShortcutsLink from './NailInfo/ ShortcutsLink';

const info = {
  nailshopName: '네일 유애나',
  location: '강남역 11번 출구',
  duration: '도보 6분',
  hashTags: ['귀여운', '깔끔한', '시크한'],
  employeeNum: '4',
  minimumPrice: '80000',
  maximumPrice: '120000',
  openingHours: [
    '*화요일 휴무',
    '주중 (월수목금) \t 10:00 - 20:00',
    '주말 \t 10:00 - 20:00 ',
    '공휴일 \t 10:00 - 20:00 ',
  ],
};

function NailInfo() {
  return (
    <div>
      <Title>{info.nailshopName}</Title>
      <LocationWrapper>
        <Location>{info.location}</Location>
        <Duration>{info.duration}</Duration>
      </LocationWrapper>
      <HashTagsWrapper>
        {info.hashTags.map((tag, index) => (
          <TagsText key={index}>#{tag}</TagsText>
        ))}
      </HashTagsWrapper>
      <ShortcutsLink />
    </div>
  );
}

export default NailInfo;

const TagsText = styled.p`
  color: ${({ theme }) => theme.colors.gray91};
  ${({ theme }) => theme.fonts.R13_2};
`;

const HashTagsWrapper = styled.div`
  display: flex;
  margin: 0.65rem 0 0 1.6rem;
`;

const LocationWrapper = styled.div`
  display: flex;
  margin: 0.8rem 0 0 1.6rem;
`;

const Duration = styled.span`
  margin-left: 0.4rem;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.R13_2};
`;

const Location = styled.p`
  color: ${({ theme }) => theme.colors.pink_dark};
  ${({ theme }) => theme.fonts.SB13_2};
`;

const Title = styled.h1`
  margin: 1.6rem 0 0 1.6rem;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.B18};
`;
