'use client';
import { ArrowUpIcon } from '@/public/icons';
import styled from '@emotion/styled';

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.pink_dark};
`;

export default function Home() {
  return (
    <main>
      <Heading>홈홈홈홈홈</Heading>
      <ArrowUpIcon />
    </main>
  );
}
