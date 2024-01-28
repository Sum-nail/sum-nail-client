'use client';
import styled from '@emotion/styled';
import { useGetShops } from '@/hooks';
import { LogoIcon } from '@/public/icons';
import Image from 'next/image';
import Card from '@/components/common/card';
import { useState } from 'react';
import theme from '@/styles/theme';
import StationRecord from '@/components/common/stationRecord';
import StationSearchBar from '@/components/common/stationSearchBar';

function Home() {
  const { list } = useGetShops();
  const TAGS = ['귀여운', '심플한', '화려한', '시크한', '예쁜', '블링블링한'];
  const [selected, setSelected] = useState(0);
  if (!list) return <></>;
  return (
    <Main>
      <Header>
        <Image src={LogoIcon} alt="image" width={80} height={20} />
        <Profile></Profile>
      </Header>

      <StationSearchBar cntPage="home" />

      <StationRecord />

      <StoreTags>
        {TAGS.map((data, index) => (
          <StoreTag key={index} onClick={() => setSelected(index)} index={index} selected={selected}>
            {data}
          </StoreTag>
        ))}
      </StoreTags>

      <Body>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Body>
    </Main>
  );
}

export default Home;

const Main = styled.div`
  padding: 0 1.6rem;
  width: 100%;
`;

const Header = styled.div`
  color: ${({ theme }) => theme.colors.pink_dark};
  height: 6rem;
  width: 100%;
  display: flex;
  border-bottom: 0.1rem solid var(--gray-F2, #f2f2f2);
  justify-content: space-between;
  align-items: center;
`;

const Profile = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(
    --gradient-pinktocoral,
    linear-gradient(
      102deg,
      rgba(255, 153, 214, 0.62) 14.29%,
      #ff95c8 57.89%,
      rgba(255, 153, 165, 0.44) 93.26%,
      #ff99d6 93.26%,
      #ff99d6 93.26%
    )
  );
`;

const Body = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem 1rem;
  justify-items: center;
`;

const StoreTags = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0.5rem;
  margin-top: 3.6rem;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StoreTag = styled.div<{ index: number; selected: number }>`
  display: flex;
  padding: 1.1rem 1.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  border: 0.1rem solid ${(props) => (props.index == props.selected ? '#ff64c1' : 'var(--gray-E5, #e5e5e5)')};
  background: ${(props) =>
    props.index == props.selected
      ? `linear-gradient(
    102deg,
    rgba(255, 153, 214, 0.62) 14.29%,
    #ff95c8 57.89%,
    rgba(255, 153, 165, 0.44) 93.26%,
    #ff99d6 93.26%
  ) `
      : '#ffffff'};
  color: ${(props) => (props.index == props.selected ? '#ffffff' : theme.colors.gray69)};
  font: ${(props) => (props.index == props.selected ? theme.fonts.SB15_2 : theme.fonts.R15_2)};
  box-shadow: ${(props) => props.index == props.selected && '0rem 0rem 0.4rem 0.2rem rgba(255, 97, 115, 0.5)'};
`;
