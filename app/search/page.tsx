'use client';
import { LogoIcon, BackIcon } from '@/public/icons';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
import StationRecord from '@/components/common/stationRecord';
import StationSearchBar from '@/components/common/stationSearchBar';

function Search() {
  const router = useRouter();

  return (
    <Main>
      <Header>
        <Image src={LogoIcon} alt="image" width={80} height={20} onClick={() => router.back()} />
        <BackIcon onClick={() => router.back()} />
      </Header>

      <StationSearchBar cntPage="search" />

      <StationRecord />

      <Body>
        <Record>성수역</Record>
      </Body>
    </Main>
  );
}

export default Search;

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

const Body = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.1rem solid var(--gray-F2, #f2f2f2) 0px;
  margin-top: 3rem;
  margin-left: -1.6rem;
  margin-right: -1.6rem;
`;

const Record = styled.div`
  display: flex;
  align-items: center;
  height: 6.4rem;
  padding: 0rem 3rem;
  border-top: 0.1rem solid var(--gray-F2, #f2f2f2);
  border-bottom: 0.1rem solid var(--gray-F2, #f2f2f2);
  color: ${({ theme }) => theme.colors.gray69};
  font: ${({ theme }) => theme.fonts.R15_2};
`;
