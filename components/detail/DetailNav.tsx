'use client';

import { BackButtonIcon, BookmarkIcon, MainLogoIcon } from '@/public/icons';
import { MainLogoIconPng } from '@/public/images';
import styled from '@emotion/styled';
import Image from 'next/image';

function DetailNav() {
  return (
    <NavContainer>
      <BackButton />
      <Image src={MainLogoIconPng} alt="로고" />
      <Bookmark />
    </NavContainer>
  );
}

export default DetailNav;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled(BackButtonIcon)`
  margin: 0.8rem 0 0 1.2rem;
`;

const Bookmark = styled(BookmarkIcon)`
  margin: 1.1rem 1.2rem 0 0;
`;
