'use client';
import { LogoIcon, MoneyIcon, MapPinIcon } from '@/public/icons';
import Image from 'next/image';
import styled from '@emotion/styled';
import Card from '@/components/common/card';
import { useRouter } from 'next/navigation';

const Main = styled.div`
  padding: 0 1.6rem;
  width: 100%;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.pink_dark};
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

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.6rem;
  height: 4.6rem;
  flex-shrink: 0;
  border-radius: 40px;
  background: ${({ theme }) => theme.colors.pink_pale};
  box-shadow: 0px 1px 4px 0px rgba(255, 103, 176, 0.16) inset;
  color: ${({ theme }) => theme.colors.pink_pop};
  font: ${({ theme }) => theme.fonts.M15_2};
`;

const SearchBarSection = styled.div`
  display: flex;
  width: 47%;
  align-items: center;
  padding-left: 2rem;
  gap: 1rem;
`;

const Body = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem 1rem;
  justify-items: center;
`;

export default function Home() {
  const router = useRouter();
  return (
    <Main>
      <Header>
        <Image src={LogoIcon} alt="image" width={80} height={20} />
        <Profile></Profile>
      </Header>
      <SearchBar>
        <SearchBarSection onClick={() => router.push('/search')}>
          <MapPinIcon />
          지하철역
        </SearchBarSection>
        |
        <SearchBarSection>
          <MoneyIcon />
          가격대
        </SearchBarSection>
      </SearchBar>
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
