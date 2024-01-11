'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FlowerColored } from '@/public/icons';
import Card from '@/components/common/card';
import theme from '@/styles/theme';
import styled from '@emotion/styled';
import EmptyBox from './EmptyBox';
interface StoredListProps {
  userId: string;
}
export default function StoredList({ userId }: StoredListProps) {
  useEffect(() => {
    scrollView.current?.scrollIntoView();
  }, []);
  const scrollView = useRef<HTMLElement>(null);
  const [storedList, setStoredList] = useState(['', '', '', '', '', '', '']);
  const storedTxt = useMemo(
    () => (userId ? '저장한 네일샵이 없어요. 네일샵을 저장해보세요!' : '로그인하면 네일샵을 저장할 수 있어요.'),
    [storedList, userId],
  );
  return (
    <ContentContainer ref={scrollView}>
      <StoredTxtContainer>
        <FlowerColored />
        <StoredTitle>저장</StoredTitle>
      </StoredTxtContainer>
      {storedList.length ? (
        <CardWrapper>
          <CardContainer>
            {storedList.map((_, index) => (
              <Card key={index} />
            ))}
          </CardContainer>
        </CardWrapper>
      ) : (
        <EmptyBox txt={storedTxt} />
      )}
    </ContentContainer>
  );
}

const ContentContainer = styled.section`
  padding-top: 1.7rem;
  min-height: 100vh;
`;

const StoredTxtContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1.6rem;
`;

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StoredTitle = styled.h3`
  ${theme.fonts.B18}
`;
