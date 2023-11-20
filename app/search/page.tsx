'use client';
import { LogoIcon, MapPinIcon } from '@/public/icons';
import Image from 'next/image';
import styled from '@emotion/styled';

const Main = styled.div`
  /* width: 100%; */
  /* margin: 0 1.6rem; */
`;

const Header = styled.div`
  color: ${({ theme }) => theme.colors.pink_dark};
  height: 6rem;
  /* width: 100%; */
  display: flex;
  border-bottom: 1px solid var(--gray-F2, #f2f2f2);
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
`;

const Profile = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  flex-shrink: 0;
  border-radius: 50%;
  /* background-color: red;÷ */
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

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchBar = styled.input`
  display: flex;
  gap: 1rem;
  outline: none;
  border: none;
  align-items: center;
  margin: 1.6rem 1.6rem;
  height: 4.6rem;
  width: 36rem;
  border-radius: 40px;
  padding-left: 2rem;
  background: ${({ theme }) => theme.colors.pink_pale};
  box-shadow: 0px 1px 4px 0px rgba(255, 103, 176, 0.16) inset;
  color: ${({ theme }) => theme.colors.pink_warm};
  font: ${({ theme }) => theme.fonts.M15_2};

  &::placeholder {
    padding-left: 2rem;
    color: ${({ theme }) => theme.colors.pink_warm};
    font: ${({ theme }) => theme.fonts.M15_2};
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray-F2, #f2f2f2) 0px;
  margin-top: 3rem;
`;

const Record = styled.div`
  display: flex;
  align-items: center;
  height: 6.4rem;
  padding: 0rem 3rem;
  border-top: 1px solid var(--gray-F2, #f2f2f2);
  border-bottom: 1px solid var(--gray-F2, #f2f2f2);
  color: ${({ theme }) => theme.colors.gray69};
  font: ${({ theme }) => theme.fonts.R15_2};
`;

const MapIconWrapper = styled.div`
  position: absolute;
  left: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Search() {
  return (
    <Main>
      <Header>
        <Image src={LogoIcon} alt="image" width={80} height={20} />
        <Profile></Profile>
      </Header>

      <SearchContainer>
        <SearchBar placeholder="지하철 역 이름을 입력해주세요."></SearchBar>
        <MapIconWrapper>
          <MapPinIcon />
        </MapIconWrapper>
      </SearchContainer>

      <Body>
        <Record>성수역</Record>
      </Body>
    </Main>
  );
}

export default Search;
