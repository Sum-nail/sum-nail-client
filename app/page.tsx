'use client';
import { ArrowUpIcon } from '@/public/icons';
import styled from '@emotion/styled';
import { useGetShops } from '@/hooks';

function Home() {
  const { list } = useGetShops();

  if (!list) return <></>;
  return (
    <main>
      <Heading>홈홈홈홈홈</Heading>
      <ArrowUpIcon />
    </main>
  );
}

export default Home;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.pink_dark};
`;
