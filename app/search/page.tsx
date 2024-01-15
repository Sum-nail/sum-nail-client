'use client';
import { LogoIcon, BackIcon } from '@/public/icons';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import StationRecord from '@/components/common/stationRecord';
import StationSearchBar from '@/components/common/stationSearchBar';
import { SubwayType } from '@/types';
import StationLine from './stationLine';
import { useAddStations } from '@/hooks';

function Search() {
  const router = useRouter();
  const { mutation: addStationRecord } = useAddStations();
  const [stations, setStations] = useState<SubwayType[]>();

  const onChangeStations = (data: any) => {
    if (data == '') {
      setStations([]);
    } else {
      setStations(data);
    }
  };

  return (
    <Main>
      <Header>
        <Image src={LogoIcon} alt="image" width={80} height={20} onClick={() => router.back()} />
        <BackIcon onClick={() => router.back()} />
      </Header>

      <StationSearchBar cntPage="search" onChangeStations={onChangeStations} />

      <StationRecord />

      <StationList>
        {stations &&
          stations.map((item) => (
            <StationListItem
              key={item.stationName}
              onClick={() => {
                addStationRecord.mutate(item.stationName);
                router.back();
              }}
            >
              <StationName>{item.stationName}역</StationName>
              <StationLine stationLine={item.stationLine} />
            </StationListItem>
          ))}
      </StationList>
    </Main>
  );
}

export default Search;

const Main = styled.div`
  padding: 0 1.6rem;
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  color: ${({ theme }) => theme.colors.pink_dark};
  height: 6rem;
  width: 100%;
  display: flex;
  border-bottom: 1px solid var(--gray-F2, #f2f2f2);
  justify-content: space-between;
  align-items: center;
`;

const StationList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-left: -1.6rem;
  margin-right: -1.6rem;
  overflow-y: scroll;
  border: 1px solid var(--gray-F2, #f2f2f2) 0px;

  & > *:first-of-type {
    border-top: 1px solid var(--gray-F2, #f2f2f2);
  }

  & > * {
    border-top: 1px solid var(--gray-F2, #f2f2f2);
  }
`;

const StationListItem = styled.li`
  display: flex;
  align-items: center;
  height: 6.4rem;
  padding: 0rem 3rem;
  color: ${({ theme }) => theme.colors.gray69};
  font: ${({ theme }) => theme.fonts.R15_2};
`;

const StationName = styled.p`
  margin-right: 1.6rem;
`;
