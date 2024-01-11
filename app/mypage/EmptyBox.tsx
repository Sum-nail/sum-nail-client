'use client';
import styled from '@emotion/styled';
import { NailArtGray } from '@/public/icons';
import theme from '@/styles/theme';

interface EmptyBoxProps {
  txt: string;
}
export default function EmptyBox({ txt }: EmptyBoxProps) {
  return (
    <StoredEmpty>
      <NailArtGray />
      <EmptyTxt>{txt}</EmptyTxt>
    </StoredEmpty>
  );
}

const StoredEmpty = styled.div`
  margin-top: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyTxt = styled.h3`
  color: ${theme.colors.gray91};
  ${theme.fonts.R11_2}
  margin-top: 1rem;
`;
